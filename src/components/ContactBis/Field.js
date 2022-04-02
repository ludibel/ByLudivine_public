// import react
import { useState } from 'react'
// import axios
import axios from 'axios'
// import pour validation des inputs
import * as Yup from 'yup'
// import reCAPTCHA
import ReCAPTCHA from 'react-google-recaptcha'
// import Emotion style
import styled from '@emotion/styled'
//import Mui
import { Grid, TextField, Button, Alert, AlertTitle } from '@mui/material'
// style with Emotion
const StyledField = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    backgroundColor: '#FFF',
    '&:after': {
      border: 'none',
    },
    '&:before': {
      border: 'none',
    },
  },
  '& label.Mui-focused': {
    color: theme.palette.color.three,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.color.three,
    fontWeight: 400,
  },
}))
const StyledButtonForm = styled(Button)(({ theme }) => ({
  color: '#fff',
  border: `2px solid ${theme.palette.color.one}`,
  backgroundColor: theme.palette.color.one,
  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: theme.palette.color.two,
    color: theme.palette.color.two,
  },
  '&:active': {
    backgroundColor: 'transparent',
    borderColor: theme.palette.color.two,
    color: theme.palette.color.two,
  },
  fontWeight: 400,
  borderRadius: 10,
}))
const StyledAlert = styled(Alert)({
  marginBottom: '2em',
  '& .MuiAlert-icon': {
    fontSize: '3em',
  },
  '& .MuiAlert-message': {
    textAlign: 'center',
    width: '100%',
  },
})
const StyledAlertTitle = styled(AlertTitle)({
  fontWeigh: 700,
})
const StyledGridButton = styled(Grid)({
  marginTop: '1em',
})

const FieldContact = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    captcha: '',
  })
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  })

  const messagesAlert = {
    error: 'Message non envoyé',
    success: 'Votre message a bien été envoyé',
  }
  const [messageAlert, setMessageAlert] = useState('')
  // state pour la vérification du reCAPTCHA
  const [isVerified, setisVerified] = useState(false)
  // gestion reCAPTCHA
  const onReCAPTCHAChange = (response) => {
    setisVerified(true)
    setData({ ...data, captcha: response })
  }
  // récuperation du contenu des champs du formulaire
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget
    if (!value[name]) {
      setErrors({ ...errors, [name]: '' })
    }
    setData({ ...data, [name]: value })
  }
  // soumission du formulaire avec contrôle des champs du formulaire
  const handleSubmitForm = async (evt) => {
    evt.preventDefault()
    // creation du schema de vérification des différents champs du formulaire
    let formSchema = Yup.object().shape({
      lastName: Yup.string().required('Nom Obligatoire'),
      firstName: Yup.string().required('Prénom Obligatoire'),
      email: Yup.string()
        .email('Format email incorrect')
        .required('Email Obligatoire'),
      message: Yup.string().required('Message Obligatoire'),
    })
    // validation des champs
    const IsFormValid = await formSchema.isValid(data, { abortEarly: false }) // abortEarly empéche l'abandon de la vérification après la première erreur

    // si la validation de tous les champs est valide on continue la soumission du formulaire
    if (IsFormValid && isVerified) {
      // requete vers API contact
      await axios({
        method: 'post',
        url: '/api/contact',
        data,
      })
        .then(function () {
          // la requete est bien passée alors on modifie le messageAlert
          setMessageAlert(messagesAlert.success)
        })
        .catch(function (error) {
          //On récupère la liste des erreurs
          const errorRequest = error.response.data
          // on modifie le state des erreurs et le messageAlert
          setErrors(errorRequest)
          setMessageAlert(messagesAlert.error)
        })
    } else {
      // si la validation des champs du formulaire a échoué on récupère les erreurs des champs incorrects
      formSchema.validate(data, { abortEarly: false }).catch((error) => {
        // on collecte les messages erreurs de chaque champs
        const errors = error.inner.reduce((acc, error) => {
          return {
            ...acc,
            [error.path]: error.message,
          }
        }, {})
        // on modifie le state des erreurs et les messages d'alerte
        setErrors(errors)
        setMessageAlert(messagesAlert.error)
      })
    }
  }

  return (
    <>
      {messageAlert === 'Message non envoyé' && (
        <StyledAlert
          severity="error"
          onClose={() => {
            setMessageAlert(null)
          }}
        >
          <StyledAlertTitle>Erreur</StyledAlertTitle>
          {messageAlert}
        </StyledAlert>
      )}
      {messageAlert === 'Votre message a bien été envoyé' && (
        <StyledAlert
          severity="success"
          onClose={() => {
            setMessageAlert(null)
            setData({
              firstName: '',
              lastName: '',
              email: '',
              message: '',
              captcha: '',
            })
          }}
        >
          <StyledAlertTitle>Succès</StyledAlertTitle>
          {messageAlert}
        </StyledAlert>
      )}
      <form onSubmit={handleSubmitForm} noValidate>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Grid item xs={12} sm={6}>
            <StyledField
              type="text"
              variant="filled"
              label="Nom"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              fullWidth
              required
              helperText={errors.lastName}
              error={Boolean(errors.lastName)}
              aria-required="true"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledField
              type="text"
              variant="filled"
              label="Prénom"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              fullWidth
              required
              helperText={errors.firstName}
              error={Boolean(errors.firstName)}
              aria-required="true"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledField
              type="email"
              name="email"
              variant="filled"
              label="Adresse mail"
              value={data.email}
              onChange={handleChange}
              fullWidth
              required
              helperText={errors.email}
              error={Boolean(errors.email)}
              aria-required="true"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <StyledField
              type="text"
              name="message"
              variant="filled"
              label="Votre message"
              value={data.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              required
              helperText={errors.message}
              error={Boolean(errors.message)}
              aria-required="true"
            />
          </Grid>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />
          <StyledGridButton item xs={12}>
            <StyledButtonForm
              type="submit"
              size="large"
              className="imageBis"
              aria-label="Envoyer le formulaire"
            >
              Envoyer
            </StyledButtonForm>
          </StyledGridButton>
        </Grid>
      </form>
    </>
  )
}

export default FieldContact

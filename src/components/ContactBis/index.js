// import Emotion Style et keyframe pour animations
import styled from '@emotion/styled'
// import mui
import Zoom from '@mui/material/Zoom'
import { Button, Grid, Typography, Box } from '@mui/material'
// import interne
import FieldContact from './Field'
import ScrollToFade from '../Animations/Fade'
import ScrollToSlide from '../Animations/Slide'
import TextTranslateInfinite from '../Animations/TextTranslateInfinite'

// style avec Emotion
const StyledGridContainer = styled(Grid)({
  paddingTop: '2em',
  paddingBottom: '2em',
})
const StyledTypoFormOne = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '2em',
  '@media (min-width: 720px)': {
    fontSize: '3em',
  },
}))
const StyledGridTypoBody = styled(Grid)({
  textAlign: 'justify',
  paddingLeft: '2em',
  paddingRight: '2em',
  paddingBottom: '3em',
  '@media (min-width: 768px)': {
    marginLeft: '2em',
    marginRight: '2em',
  },
  '@media (min-width: 1220px)': {
    marginLeft: '7em',
    marginRight: '7em',
  },
  '@media (min-width: 2000px)': {
    marginLeft: '15em',
    marginRight: '15em',
  },
})
const StyledGridMalt = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: theme.palette.color.three,
  borderRadius: '50px 0px 0px 50px',
  marginLeft: '3em',
  marginTop: '1.5em',
  marginBottom: '1.5em',
  boxShadow: '0 0 10px rgb(0 0 0 / 20%)',
  '@media (min-width: 1024px)': {
    marginTop: '2em',
    marginBottom: '2em',
  },
}))
const StyledGridContainerMalt = styled(Grid)(({ theme }) => ({
  marginTop: '1.5em',
  marginBottom: '1.5em',
  '@media (min-width: 1024px)': {
    marginTop: '2em',
    marginBottom: '2em',
  },
  paddingLeft: '0.6em',
}))
const StyledButton = styled(Button)(({ theme }) => ({
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
const StyledTypoMaltOne = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.color.one,
  padding: '0.5em 0.5em',
  fontSize: '2em',
  '@media (min-width: 720px)': {
    fontSize: '3em',
  },
}))
const StyledTypoMaltBis = styled(Typography)({
  fontWeight: 700,
  color: '#fff',
  fontSize: '1.2em',
  '@media (min-width: 1024px)': {
    fontSize: '1.4em',
  },
  '@media (min-width: 2000px)': {
    fontSize: '1.7em',
  },
})
const StyledTypoFormBis = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.color.one,
  fontSize: '1.2em',
  '@media (min-width: 1024px)': {
    fontSize: '1.4em',
  },
  '@media (min-width: 2000px)': {
    fontSize: '1.7em',
  },
}))
const StyledGridButtonMalt = styled(Grid)({
  paddingBottom: '1em',
})
const StyledGridFormButton = styled(Grid)({
  marginTop: '1em',
  marginBottom: '1em',
})
const StyledGridForm = styled(Grid)({
  textAlign: 'center',
  backgroundColor: '#F5F5F5',
  paddingBottom: '12em',
  paddingTop: '2em',
})
const StyledGridField = styled(Grid)({
  marginLeft: '1em',
  marginRight: '1em',
  marginBottom: '1em',
  '@media (min-width: 760px)': {
    marginLeft: '3em',
    marginRight: '3em',
  },
  '@media (min-width: 1024px)': {
    marginLeft: '10em',
    marginRight: '10em',
  },
  '@media (min-width: 1200px)': {
    marginLeft: '15em',
    marginRight: '15em',
  },
  '@media (min-width: 1440px)': {
    marginLeft: '20em',
    marginRight: '20em',
  },
  '@media (min-width: 2000px)': {
    marginLeft: '35em',
    marginRight: '35em',
  },
})
const StyledTypoTitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: '200',
  color: theme.palette.color.one,
  textAlign: 'center',
  paddingTop: '1em',
  '@media (max-width: 420px)': {
    fontSize: '2.5em',
  },
  '@media (min-width: 768px)': {
    textAlign: 'left',
    paddingLeft: '0.5em',
    paddingRight: '1em',
  },
  '& span': {
    color: theme.palette.color.three,
  },
}))
const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  fontSize: theme.typography.paragrapheSmall.fontSize,
  '@media (min-width: 768px)': {
    fontSize: theme.typography.paragraphe.fontSize,
  },
  '& span': {
    fontWeight: 700,
    color: theme.palette.color.one,
  },
}))
const StyledBox = styled(Box)({
  marginTop: '3em',
})

const Contact = () => {
  return (
    <StyledBox>
      <TextTranslateInfinite />
      <Zoom in={true} timeout={3000}>
        <StyledTypoTitle variant="h3" component="h3">
          Prendre<span> contact </span>
        </StyledTypoTitle>
      </Zoom>
      <StyledGridContainer
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        id="Contact"
      >
        <StyledGridTypoBody item xs={12}>
          <StyledTypography variant="body1">
            Si vous souhaitez que nous échangions autour de votre{' '}
            <span> projet </span>ou de vos<span> besoins</span>, vous pouvez me
            contacter, soit par la plateforme de mise en relation de freelances
            MALT, soit directement par le formulaire de contact ci-dessous.
          </StyledTypography>
        </StyledGridTypoBody>
        <ScrollToSlide threshold={1600} timeout={3000} direction="left">
          <StyledGridMalt item xs={12}>
            <StyledGridContainerMalt
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={8} sx={{ marginBottom: '1em' }}>
                <StyledTypoMaltOne variant="h4" component="h4">
                  Avec Malt
                </StyledTypoMaltOne>
                <StyledTypoMaltBis variant="body1">
                  Plateforme qui joue le rôle de tiers de confiance afin de
                  sécuriser les prestations entre le client et le freelance.
                </StyledTypoMaltBis>
              </Grid>
              <StyledGridButtonMalt item xs={12} md={4}>
                <StyledButton
                  size="large"
                  className="imageBis"
                  href="https://www.malt.fr/profile/ludivineblot1"
                  target="_blank"
                  aria-label="Accéder mon profil Malt"
                >
                  Mon profil Malt
                </StyledButton>
              </StyledGridButtonMalt>
            </StyledGridContainerMalt>
          </StyledGridMalt>
        </ScrollToSlide>
      </StyledGridContainer>
      <ScrollToFade threshold={1800} direction="down" timeout={6000}>
        <StyledGridForm
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <StyledTypoFormOne variant="h4" component="h4">
              Avec le formulaire
            </StyledTypoFormOne>
          </Grid>
          <StyledGridFormButton item xs={12}>
            <StyledTypoFormBis variant="body1">
              C'est ici que vous pouvez me laisser directement votre message
            </StyledTypoFormBis>
          </StyledGridFormButton>
          <StyledGridField item xs={12}>
            <FieldContact />
          </StyledGridField>
        </StyledGridForm>
      </ScrollToFade>
    </StyledBox>
  )
}

export default Contact

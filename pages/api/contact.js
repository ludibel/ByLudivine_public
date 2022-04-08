// api contact permet de valider ou non  le formulaire de contact

// import pour validation des données reçues
import * as Yup from 'yup';
// import de nodemailer pour la creation du mail issue du formulaire de contact et son envoie
import nodemailer from 'nodemailer';
// import axios
import axios from 'axios';

export default async function SendMail(req, res) {
  // creation du schema de vérification des différents champs du formulaire avec yup
  const formSchema = Yup.object().shape({
    lastName: Yup.string().required('Nom Obligatoire'),
    firstName: Yup.string().required('Prenom Obligatoire'),
    email: Yup.string().email('format incorrect').required('Email Obligatoire'),
    message: Yup.string().required('Message Obligatoire'),
    captcha: Yup.string().required('Validation reCAPTCHA'),
  });

  // validation des champs
  const IsFormValid = await formSchema.isValid(req.body, {
    abortEarly: false,
  });
  // validation reCaptcha
  const googleUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${
    process.env.RECAPTCHA_SECRET_KEY
  }&response=${
    req.body.captcha}`;
  const validateCaptcha = await axios({
    url: googleUrl,
  });
  if (validateCaptcha.data.success === false) {
    return res.status(400).end('reCaptcha incorrect');
  }
  if (IsFormValid && validateCaptcha.data.success === true) {
    // Creation du corps du mail
    const mailData = {
      from: `${req.body.email}`,
      to: process.env.SMTP_EMAIL_TO,
      subject: `${req.body.lastName}`,
      text: `${req.body.message}`,
    };
    // on definit le transport (lieu de destination du mail)
    const transporter = nodemailer.createTransport({
      port: process.env.SMTP_PORT,
      host: process.env.SMTP_HOST,
      secure: false,
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    transporter.verify((error, success) => {
      if (error) {
        // verification du transport si il n'est pas ok alors on arrête la requête
        return res.status(400).end('transport incorrect');
      }
      // vérification du transport si il est ok alors on envoie du mail
      transporter.sendMail(mailData, (err, data) => {
        if (err) {
          return res.status(400).end('envoie non effectué');
        }
        // on revoit un status 200 pour valider la requete et la clôturer
        return res.status(200).end('envoie effectué avec succés');
      });
    });
  } else {
    formSchema.validate(req.body, { abortEarly: false }).catch((error) => {
      // collecte de toutes les erreurs
      const errors = error.inner.reduce((acc, error) => ({
        ...acc,
        [error.path]: error.message,
      }), {});
      // on envoie un status 400 avec la liste des erreurs et on clotûre la requête
      return res.status(400).json(errors).end();
    });
  }
}

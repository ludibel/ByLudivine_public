// import images / logos
import logoReact from '../../public/logoTechnos/logo_react.png';
import logoNodeMailer from '../../public/logoTechnos/logo_nodeMailer.png';
import logoMui from '../../public/logoTechnos/logo_mui.png';
import logoDocker from '../../public/logoTechnos/logo_docker.png';
import logoNext from '../../public/logoTechnos/logo_next_white.png';
import logoEmotion from '../../public/logoTechnos/logo_emotion.png';
import logoRecaptcha from '../../public/logoTechnos/logo_reCaptcha.png';
// tableaux des données
export const listLogo = [
  {
    title: 'Next JS',
    src: logoNext,
    alt: 'logo_Next',
  },
  {
    title: 'React 17',
    src: logoReact,
    alt: 'logo_React',
  },
  {
    title: 'NodeMailer',
    src: logoNodeMailer,
    alt: 'logo_NodeMailer',
  },
  {
    title: 'Mui React',
    src: logoMui,
    alt: 'logo_Mui',
  },
  {
    title: 'Docker',
    src: logoDocker,
    alt: 'logo_docker',
  },
  {
    title: 'ReCAPTCHA',
    src: logoRecaptcha,
    alt: 'logo_reCAPTCHA',
  },
  {
    title: 'Emotion',
    src: logoEmotion,
    alt: 'logo_emotion',
  },
];
export const textProjet = [
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content1',
    content: 'Pour présenter mon savoir faire en développement web, j’ai conçu le site Internet ByLudivine.com dans lequel je détaille quelques projets réalisés, les technologies utilisées ainsi que les compétences mises en oeuvre. ',
  },
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content2',
    content: 'Ce site est une vitrine de mes compétences en développement qui permet à tout porteur d’un projet de valider que mon profil correspond à son besoin.',
  },
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content3',
    content: 'Elément indispensable d’un site web, le formulaire de contact a été conçu en implémentant des mécanismes de sécurité pour éviter l’injection de code malveillant mais également pour éviter que ma boite email soit spamée de courriers indésirables. ',
  },
];
export const textCompetence = [
  {
    key: 'card-comp1',
    content: 'La création d’un site Internet responsive en Next.js',
  },
  {
    key: 'card-comp2',
    content: 'La validation des données du formulaire de contact avec Yup',
  },
  {
    key: 'card-comp3',
    content:
      'Utilisation de nodemailer afin de transmettre les données du formulaire de contact par email',
  },
  {
    key: 'card-comp5',
    content: 'Intégration de google reCAPTCHA afin d\' éviter les spams',
  },
  {
    key: 'card-comp4',
    content: 'Utlisation de Docker pour l\'environnement de développement',
  },
];

// import images / logos
import imageDashboardHome from '@public/imagesPortFolio/dashboard_image1.png';
import imageDashboardData from '@public/imagesPortFolio/dashboard_image2.png';
import imageDashboardBank from '@public/imagesPortFolio/dashboard_image4.png';
import imageDashboardTransaction from '@public/imagesPortFolio/dashboard_image5.png';
import logoReact from '@public/logoTechnos/logo_react.png';
import logoSymfo from '@public/logoTechnos/logo_symfo.png';
import logoMui from '@public/logoTechnos/logo_mui.png';
import logoEmotion from '@public/logoTechnos/logo_emotion.png';
// tableaux des données
export const listLogo = [
  {
    title: 'React 17',
    src: logoReact,
    alt: 'logo_React',
  },
  {
    title: 'Symfony 4',
    src: logoSymfo,
    alt: 'logo_Symfony',
  },
  {
    title: 'Mui React',
    src: logoMui,
    alt: 'logo_Mui',
  },
  {
    title: 'Emotion',
    src: logoEmotion,
    alt: 'logo_Emotion',
  },
];

export const slideInfo = [
  {
    title: 'Accueil Dashboard',
    src: imageDashboardHome,
    alt: 'imageDashboard_Accueil',
  },
  {
    title: 'Données Dashboard',
    src: imageDashboardData,
    alt: 'imageDashboard_Donnees',
  },
  {
    title: 'Banque Dashboard',
    src: imageDashboardBank,
    alt: 'imageDashboard_Banque',
  },
  {
    title: 'Transaction Dashboard',
    src: imageDashboardTransaction,
    alt: 'imageDashboard_Transaction',
  },
];

export const textProjet = [
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content1',
    content: `Création de l’interface frontend du dashboard d’un compte utilisateur pour une plateforme de marketplace. La page
    principale synthétise les informations importantes du client
    (profil, validité du KYC, contenu du porte-monnaie
    électronique, coordonnées bancaires et dernières
    transactions).`,
  },
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content2',
    content: `Au sein des onglets spécifiques, l’utilisateur peut changer
    son mot de passe et les informations de son compte,
    enregistrer un KYC, insérer un IBAN et voir le détail de
    toutes ses transactions.`,
  },
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content3',
    content: `L’ensemble du dashboard est responsive.`,
  },
];
export const textCompetence = [
  {
    key: 'card-comp1',
    content: 'Création complète d’un dashboard',
  },
  {
    key: 'card-comp2',
    content:
      'Prise en main de la nouvelle version de Material UI (V5) avec Emotion',
  },
  {
    key: 'card-comp3',
    content:
      'Etude des API de MangoPay pour le couplage avec un backend Symfony',
  },
];

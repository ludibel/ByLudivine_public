import { Button } from '@mui/material';
import image3dinvestScoring from '@public/imagesPortFolio/smartphone-scoring.png';
import image3dinvestFisca from '@public/imagesPortFolio/smartphone-fisca.png';
import image3dinvestDegrade from '@public/imagesPortFolio/smartphone-degrades.png';
import logoRedux from '@public/logoTechnos/logo_redux.png';
import logoReact from '@public/logoTechnos/logo_react.png';
import logoSymfo from '@public/logoTechnos/logo_symfo.png';
import logoMui from '@public/logoTechnos/logo_mui.png';
import logoApi from '@public/logoTechnos/logo_api.png';
import logoJspdf from '@public/logoTechnos/logo_jspdf.png';
import logoPwa from '@public/logoTechnos/logo_pwa.png';
import logoApex from '@public/logoTechnos/logo_apex.png';
import logoRestful from '@public/logoTechnos/logo_restful.png';
import logoPostgre from '@public/logoTechnos/logo_postgresql.png';

// tableaux des données
export const listImage = [
  {
    title: '3DInvest Scoring',
    src: image3dinvestScoring,
    alt: 'imagescoring',
  },
  {
    title: '3DInvest Fiscalité',
    src: image3dinvestFisca,
    alt: 'image-3dinvest-fisca',
  },
  {
    title: '3DInvest Dégradé',
    src: image3dinvestDegrade,
    alt: 'image-3dinvest-degradé',
  },
];
export const listLogo = [
  {
    title: 'Redux',
    src: logoRedux,
    alt: 'logo_Redux',
  },
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
    title: 'API Platform',
    src: logoApi,
    alt: 'logo_ApiPlatform',
  },
  {
    title: 'JSPDF',
    src: logoJspdf,
    alt: 'logo_JSPDF',
  },
  {
    title: 'PWA',
    src: logoPwa,
    alt: 'logo_pwa',
  },
  {
    title: 'API Restful',
    src: logoRestful,
    alt: 'logo_apiRestFul',
  },
  {
    title: 'PostgreSQL',
    src: logoPostgre,
    alt: 'logo_postgreSQL',
  },
  {
    title: 'ApexChartsJS',
    src: logoApex,
    alt: 'logo_ApexChartsJS',
  },
];
export const textProjet = [
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content1',
    content: `Application mobile first qui permet d’effectuer des
      simulations de rentabilité d’un projet d’investissement
      locatif selon 4 fiscalités différentes. L’application calcule
      automatiquement plus de 20 paramètres avec seulement 3 données
      saisies.`,
  },
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content2',
    content: `Jusqu’à 10 études de projet peuvent être enregistrées avec une
      synthèse des informations importantes.`,
  },
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content3',
    content: ` Un dossier bancaire complet de 13 pages peut être généré en
      PDF pour chaque étude de projet.`,
  },
  {
    className: 'paragrapheBtnJustify',
    key: 'card-content4',
    content: `Présentation de l'application: `,
  },
  {
    className: 'paragrapheBtnCenter',
    key: 'card-content5',
    content: (
      <Button
        variant="contained"
        href="https://www.investissement-locatif-intelligent.fr/3dinvest/"
        target="_blank"
      >
        Accéder au site
      </Button>
    ),
  },
];
export const textCompetence = [
  {
    key: 'card-comp1',
    content: 'La création d’une PWA.',
  },
  {
    key: 'card-comp2',
    content:
      'La mise en place d’un système de communication par API entre un backend Symfony et un frontend en ReactJS.',
  },
  {
    key: 'card-comp3',
    content:
      'L’authentification des utilisateurs et des droits en fonction de leur type d’abonnement, suite à leur achat sur un site WooCommerce.',
  },
  {
    key: 'card-comp4',
    content:
      'L’algorithmie des calculs nécessaires au traitement des données fiscales sur une projection de 35 ans.',
  },
  {
    key: 'card-comp5',
    content:
      'Réalisation du template du dossier bancaire pour sa génération en PDF.',
  },
];

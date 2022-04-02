import { createTheme } from '@mui/material/styles'

const themePerso = createTheme({
  typography: {
    fontFamily: ['Philosopher', 'Roboto'].join(','),
    portfoliotitle: {
      fontSize: '1.5em',
    },
    portfoliotext: {
      fontSize: '1.2em',
    },
    portfoliotextSmall: {
      fontSize: '1em',
    },
    paragrapheSmall: {
      fontSize: '1.2em',
    },
    paragraphe: {
      fontSize: '1.4em',
    },
  },
  palette: {
    color: {
      one: '#22b99a', // vert
      two: '#219a86', // vert foncé
      three: '#1E2E3E', // bleu foncé
      four: '#048cdc', // bleu lien
      six: '#D6D6D6', // gris
      seven: '#F5F5F5', // grid clair
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
})
export default themePerso

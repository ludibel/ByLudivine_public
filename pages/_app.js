// import Style globals
import '@styles/globals.css';
// import react
import { ThemeProvider } from '@emotion/react';
// import du theme perso
import theme from '@styles/themePerso';
// on englobe Component de ThemeProvider afin de pouvoir utiliser theme perso sur les composants
const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;

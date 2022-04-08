// import Style globals
import '../styles/globals.css';
// import react
import { ThemeProvider } from '@emotion/react';
// import du theme perso
import theme from '../styles/themePerso';
// on englobe Component de ThemeProvider afin de pouvoir utiliser notre theme perso sur l'ensemble des composants
function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

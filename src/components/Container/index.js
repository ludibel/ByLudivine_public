// import react / next
import React from 'react';
import PropTypes from 'prop-types';
// import Emotion styled
import styled from '@emotion/styled';
// import composant interne
import ScrollTop from '@components/ScrollTop';
import NavBar from '@components/Nav';
import Footer from '@components/Footer';
import Seo from '@components/Seo';
// import image
import logo from '@public/logo-ByLudivine.png';
import imageTag from '@public/site_ByLudivine.png';

// le composant Container permet de disposer la navbar, footer sur les différentes pages
const Container = ({ children, title }) => {
  const StyledDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    '@media (min-width: 3000px)': {
      marginLeft: '50em',
      marginRight: '50em',
    },
  });

  return (
    <StyledDiv>
      <Seo
        url="https://www.ByLudivine.com"
        titleSeo="Ludivine BLOT Développeuse web"
        description="Développement d'applications web et de sites Internet"
        image={`https://www.byludivine.com${imageTag.src}`}
        author="Ludivine BLOT"
        title={title}
      />
      <ScrollTop />
      <NavBar logo={logo} />
      <main>{children}</main>
      <Footer logo={logo} />
    </StyledDiv>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  title: PropTypes.string.isRequired,
};
export default Container;

// import react /next
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import Emotion style
import styled from '@emotion/styled';
// import mui
import {
  Button,
  Toolbar,
  IconButton,
  Typography,
  AppBar,
  Drawer,
  ListItem,
  List,
  Card,
} from '@mui/material';
// import mui icons
import MenuIcon from '@mui/icons-material/Menu';
// import interne
import PortfolioMenu from './PortfolioMenu';
// style avec Emotion
const StyledButtonNav = styled(Button)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.color.six,
  fontSize: '1.2em',
  textTransform: 'initial',
  '@media (max-width: 768px)': {
    color: theme.palette.color.three,
  },
  '&:hover': {
    color: theme.palette.color.one,
    backgroundColor: 'transparent',
  },
}));
const StyledTypoLogoName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5em',
  textAlign: 'left',
  paddingTop: 10,
  paddingLeft: 10,
  color: theme.palette.color.six,
}));
const StyledToolbarNav = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const StyledDivNav = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});
const StyledCardNav = styled(Card)({
  height: 110,
  border: 'none',
  textAlign: 'center',
});
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.color.three,
  color: '#1c2842',
  paddingRight: 10,
  paddingLeft: 10,
  '@media (max-width: 900px)': {
    paddingLeft: 0,
  },
}));
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    color: theme.palette.color.six,
  },
}));

function NavBar({ logo }) {
  const router = useRouter();
  const navData = [
    {
      label: 'Mes projets',
      menu: true,
    },
    {
      label: 'Technos',
      href: '#Technos',
      menu: false,
    },
    {
      label: 'Me contacter',
      href: '#Contact',
      menu: false,
    },
  ];

  const navDataBis = [
    {
      label: 'Accueil',
      href: '/',
    },
    {
      label: 'Mes projets',
      menu: true,
    },
  ];

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  // Au montage du composant on définit si on est en mode mobile ou non
  // ici si window.innerWidth est inférieur à 900 on passe le state mobileView à true
  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 800
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  // affichage du menu lorsque mobileView=false
  const getMenuButtons = () => {
    // si la route n'est pas sur la page d'accueil la navbar affichera les items : Accueil et Portfolio
    if (router.asPath !== '/') {
      return navDataBis.map((nav) => (
        <div key={nav.label}>
          {nav.menu ? (
            <PortfolioMenu />
          ) : (
            <StyledButtonNav
              href={nav.href}
              className="imageBis"
              aria-label={`se diriger vers ${nav.label}`}
            >
              {nav.label}
            </StyledButtonNav>
          )}
        </div>
      ));
    }
    // si la route est sur Accueil alors la navBar affichera les items : Accueil/PortFolio/Technos/Contact
    if (router.asPath === '/') {
      return navData.map((nav) => (
        <div key={nav.label}>
          {nav.menu ? (
            <PortfolioMenu />
          ) : (
            <StyledButtonNav
              href={nav.href}
              className="imageBis"
              aria-label={`se diriger vers ${nav.label}`}
            >
              {nav.label}
            </StyledButtonNav>
          )}
        </div>
      ));
    }
  };
  // affichage du menu lorsque mobileView=true
  const getDrawerChoices = () => {
    // si la route n'est pas sur la page d'accueil la navbar affichera les items : Accueil et Portfolio
    if (router.asPath !== '/') {
      return (
        <List component="nav">
          {navDataBis.map((nav, index) => (
            <ListItem id={`nav-${index}`} key={`mobile-${nav.label}`}>
              {nav.menu ? (
                <PortfolioMenu />
              ) : (
                <StyledButtonNav
                  href={nav.href}
                  className="imageBis"
                  aria-label={`se diriger vers ${nav.label}`}
                >
                  {nav.label}
                </StyledButtonNav>
              )}
            </ListItem>
          ))}
        </List>
      );
    }
    // si la route est sur Accueil alors la navBar affichera les items : Accueil/PortFolio/Technos/Contact
    if (router.asPath === '/') {
      return (
        <List component="nav">
          {navData.map((nav, index) => (
            <ListItem id={`nav-${index}`} key={`mobile-${nav.label}`}>
              {nav.menu ? (
                <PortfolioMenu />
              ) : (
                <StyledButtonNav
                  href={nav.href}
                  className="imageBis"
                  aria-label={`se diriger vers ${nav.label}`}
                >
                  {nav.label}
                </StyledButtonNav>
              )}
            </ListItem>
          ))}
        </List>
      );
    }
  };

  const titleLogo = (
    <StyledTypoLogoName variant="body1">ByLudivine</StyledTypoLogoName>
  );

  const displayDesktop = () => (
    <StyledToolbarNav>
      <Link href="/">
        <a>
          <StyledDivNav>
            <Image
              alt="logo_Byludivine"
              src={logo}
              width={50}
              height={50}
              quality={100}
            />
            {titleLogo}
          </StyledDivNav>
        </a>
      </Link>
      <StyledDivNav>{getMenuButtons()}</StyledDivNav>
    </StyledToolbarNav>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <StyledToolbar>
        <IconButton
          {...{
            edge: 'start',
            onClick: handleDrawerOpen,
          }}
          aria-label="Voir le menu"
          className="imageBis"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>
            <Link href="/">
              <a>
                <StyledCardNav variant="outlined">
                  <Image
                    alt="logo_Byludivine"
                    src={logo}
                    width={100}
                    height={100}
                    quality={100}
                  />
                </StyledCardNav>
              </a>
            </Link>
          </div>
          <div sx={{ padding: '20px 30px' }}>{getDrawerChoices()}</div>
        </Drawer>

        <div>
          <Link href="/">
            <a>{titleLogo}</a>
          </Link>
        </div>
      </StyledToolbar>
    );
  };
  return (
    <StyledAppBar>
      {mobileView ? displayMobile() : displayDesktop()}
    </StyledAppBar>
  );
}

export default NavBar;

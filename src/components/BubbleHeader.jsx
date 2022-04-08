// import react / next
import { useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
// import Emotion style
import styled from '@emotion/styled';
// import Emotion keyframe pour animation
import { keyframes } from '@emotion/react';
// import mui
import { Grid, Typography, Divider } from '@mui/material';
// import interne
import bubblesHeader from '../../public/bubbles';
import TextAnimation from './Animations/TextAnimation';
// animations
const animateCircle = keyframes`
  from {
		transform: rotate(0deg) translate(0%, 0%);
  }
	to {
		transform: rotate(360deg) translate(0%, -50%);
	}
`;
const scale = keyframes`
  from {
		transform: scale(0.4) ;
  }
	to {
		transform: scale(1);
	}
`;
// style
const StyledCircle = styled('div')({
  width: 70,
  height: 70,
  borderRadius: '50%',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  animation: `${animateCircle} 10s infinite ease alternate`,
});
const StyledDivLogo = styled('div')({
  position: 'relative',
  width: '100%',
  paddingBottom: '20%',
  transform: 'translateY(-50%)',
  '@media (min-width: 768px)': {
    paddingBottom: 0,
  },
});
const StyledGridLogo = styled(Grid)({
  textAlign: 'center',
  '@media (min-width: 768px)': {
    background: 'linear-gradient(180deg,#ffffff 30%,#f4f4f4 100%)',
    display: 'none',
  },
});
const StyledGridLogoBis = styled(Grid)({
  textAlign: 'center',
  display: 'none',
  '@media (min-width: 768px)': {
    background: 'linear-gradient(180deg,#ffffff 30%,#f4f4f4 100%)',
    display: 'block',
  },
});
const StyledGridImage = styled(Grid)({
  textAlign: 'center',
  paddingTop: 7,
  '& span': {
    '@media (max-width: 500px)': {
      top: 5,
    },
    '@media (min-width: 500px)': {
      top: 4,
    },
  },
});
const StyledTypo = styled(Typography)(({ theme }) => ({
  fontSize: '2.5em',
  fontWeight: '200',
  color: theme.palette.color.three,
  '@media (min-width: 720px)': {
    fontSize: '2.6em',
  },
  '@media (min-width: 1024px)': {
    fontSize: '3.2em',
  },
  '@media (min-width: 1440px)': {
    fontSize: '4.5em',
  },
}));
const StyledGridTypo = styled(Grid)({
  position: 'absolute',
  left: 170,
  display: 'none',
  '@media (min-width: 768px)': {
    display: 'block',
    left: 400,
  },
  '@media (min-width: 1024px)': {
    left: 555,
  },
  '@media (min-width: 1440px)': {
    left: 700,
  },
  '@media (min-width: 2000px)': {
    left: 820,
  },
  '@media (min-width: 2500px)': {
    left: 1350,
  },
  '@media (min-width: 3000px)': {
    left: 800,
  },
});
const StyledGridTypoBis = styled(Grid)({
  textAlign: 'center',
  marginTop: '-30px',
  marginBottom: '1em',
  '@media (min-width: 600px)': {
    marginTop: '-55px',
  },
  '@media (min-width: 768px)': {
    display: 'none',
  },
});
const StyledTypoBis = styled(Typography)(({ theme }) => ({
  fontWeight: '200',
  color: theme.palette.color.one,
  marginBottom: 10,
  fontSize: '2.2em',
  '@media (min-width: 768px)': {
    fontSize: '2.6em',
  },
  '@media (min-width: 1024px)': {
    fontSize: '3.2em',
  },
  '@media (min-width: 1440px)': {
    fontSize: '4.5em',
  },
}));
const StyledGridTypoTer = styled(Grid)({
  textAlign: 'justify',
  paddingLeft: '2em',
  paddingRight: '2em',
  paddingTop: '1em',
  background: 'linear-gradient(180deg,#ffffff 30%,#f4f4f4 100%)',
  '@media (min-width: 768px)': {
    background: 'none',
    marginTop: -65,
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
});
const StyledTypoTer = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  paddingBottom: '1em',
  fontSize: theme.typography.paragrapheSmall.fontSize,
  '@media (min-width: 768px)': {
    fontSize: theme.typography.paragraphe.fontSize,
  },
  '& span': {
    fontWeight: 700,
    color: theme.palette.color.one,
  },
}));
const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.color.three,
  marginLeft: 60,
  marginRight: 60,
  borderBottomWidth: 'unset',
  marginTop: '1em',
}));
const StyledImage = styled(Image)({
  animation: `${scale} 5s linear`,
});
const StyledGridContainer = styled(Grid)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.color.three}`,
}));
const StyledGridBubblesMobile = styled(Grid)({
  '@media (min-width: 1024px)': {
    display: 'none',
  },
  position: 'relative',
});
const StyledGridBubbles = styled(Grid)({
  '@media (max-width: 1023px)': {
    display: 'none',
  },
  position: 'relative',
});

function BubbleHeader({ logo, portraitLudivine }) {
  const [width, setWidth] = useState();
  const [heighttop, setHeighttop] = useState(400);
  // définit la hauteur de bulles en fonction de la largeur
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    if (width === 320 && width < 375) {
      setHeighttop(340);
    }
    if (width >= 375 && width < 768) {
      setHeighttop(416);
    }
    if (width >= 768 && width < 1024) {
      setHeighttop(450);
    }
    if (width >= 1024 && width < 1440) {
      setHeighttop(640);
    }
    if (width >= 1440 && width < 2560) {
      setHeighttop(614);
    }
    if (width >= 2560) {
      setHeighttop(625);
    }
  });

  return (
    <>
      <StyledGridContainer
        container
        justify="center"
        direction="row"
        alignItems="center"
      >
        <StyledGridBubblesMobile item xs={12}>
          {bubblesHeader
            .filter((el) => el.displayMobile === true)
            .map((bubble, index) => (
              <StyledCircle
                id={`bubbles-${index}`}
                key={`${bubble.top} ${bubble.left}`}
                style={{
                  top: heighttop * bubble.top,
                  left: `${bubble.left}%`,
                  height: `${bubble.height}px`,
                  width: `${bubble.width}px`,
                  backgroundColor: `${bubble.color}`,
                  animationDelay: `${bubble.delay}`,
                  opacity: `${bubble.opacity}`,
                }}
              />
            ))}
        </StyledGridBubblesMobile>
        <StyledGridBubbles item xs={12}>
          {bubblesHeader.map((bubble, index) => (
            <StyledCircle
              id={`bubbles-${index}`}
              key={`${bubble.top} ${bubble.left}`}
              style={{
                top: heighttop * bubble.top,
                left: `${bubble.left}%`,
                height: `${bubble.height}px`,
                width: `${bubble.width}px`,
                backgroundColor: `${bubble.color}`,
                animationDelay: `${bubble.delay}`,
                opacity: `${bubble.opacity}`,
              }}
            />
          ))}
        </StyledGridBubbles>
        <StyledGridImage item xs={12} sm={6}>
          <Image
            src={portraitLudivine}
            alt="Picture of the author"
            quality={100}
          />
        </StyledGridImage>
        <StyledGridTypo item sm={6}>
          <StyledTypo variant="h1" component="h1">
            Ludivine BLOT
          </StyledTypo>
          <StyledTypoBis variant="h2" component="h2">
            <TextAnimation text="Développeuse web" textBis="Freelance" />
          </StyledTypoBis>
        </StyledGridTypo>
      </StyledGridContainer>
      <Grid container justify="center" direction="row" alignItems="center">
        <StyledGridLogo item xs={12}>
          <StyledDivLogo>
            <StyledImage
              src={logo}
              quality={100}
              alt="Logo By ludivine"
              layout="fill"
              objectFit="contain"
              className="imageLogo"
            />
          </StyledDivLogo>
        </StyledGridLogo>
        <StyledGridLogoBis item xs={12}>
          <StyledDivLogo>
            <StyledImage
              src={logo}
              quality={100}
              alt="Logo By ludivine"
              width={120}
              height={120}
            />
          </StyledDivLogo>
        </StyledGridLogoBis>
      </Grid>
      <StyledGridTypoBis item xs={12}>
        <StyledTypo variant="h1" component="h1">
          Ludivine BLOT
        </StyledTypo>
        <StyledTypoBis variant="h2" component="h2">
          Développeuse web
        </StyledTypoBis>
        <StyledTypoBis variant="h2" component="h2">
          Freelance
        </StyledTypoBis>
        <StyledDivider variant="middle" />
      </StyledGridTypoBis>
      <Grid
        container
        justify="center"
        direction="row"
        alignItems="center"
        sx={{ backgroundColor: '#F5F5F5' }}
      >
        <StyledGridTypoTer item xs={12}>
          <StyledTypoTer variant="body1">
            Déléguer la création de son site Internet ou de son application web
            à un freelance, c’est lui confier la
            {' '}
            <span> réussite </span>
            {' '}
            de son
            projet et d’une partie de son
            {' '}
            <span>investissement</span>
            . Il est
            donc important de faire le bon choix.
          </StyledTypoTer>
          <StyledTypoTer variant="body1">
            Consciente des incertitudes que vous ressentez, j’ai conçu le site
            ByLudivine.com afin de mettre en avant mes
            {' '}
            <span> compétences</span>
            {' '}
            au travers de quelques projets déjà réalisés. Et si vous le
            souhaitez, nous pouvons échanger par téléphone ou par
            visioconférence.
          </StyledTypoTer>
        </StyledGridTypoTer>
      </Grid>
    </>
  );
}
BubbleHeader.propTypes = {
  logo: PropTypes.object.isRequired,
  portraitLudivine: PropTypes.object.isRequired,
};
export default BubbleHeader;

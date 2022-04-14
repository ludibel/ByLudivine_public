// import next / image
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
// import Emotion style
import styled from '@emotion/styled';
// impot mui
import Zoom from '@mui/material/Zoom';
// import mui
import {
  Grid,
  Box,
  Button,
  Typography,
  Card,
  CardHeader,
  CardActions,
} from '@mui/material';
// import interne animations
import animateVertical from '@components/Animations/AnimVertical';
import animateDiagonal from '@components/Animations/AnimDiagonal';
import animateHorizontal from '@components/Animations/AnimHorizontal';
// style
const StyledBox = styled(Box)({
  paddingTop: '1em',
  paddingBottom: '2em',
  backgroundImage: `url('bg_bubble_bis.png')`,
  backgroundSize: 'cover',
  backgroundColor: '#F5F5F5',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
});
const StyledCardOne = styled(Card)(({ theme }) => ({
  borderRadius: '50px 0px 50px 0px',
  backgroundColor: theme.palette.color.three,
  textAlign: 'center',
  boxShadow: '1px 1px 24px 0px rgb(30 46 62 / 73%)',
  width: 300,
  '@media (min-width: 768px)': {
    animation: `${animateVertical} 90s ease-in infinite normal forwards`,
  },
  '@media (min-width: 1024px)': {
    width: 320,
  },
  '@media (min-width: 2000px)': {
    width: 350,
  },
}));
const StyledCardBis = styled(Card)(({ theme }) => ({
  borderRadius: '50px 0px 50px 0px',
  backgroundColor: theme.palette.color.three,
  textAlign: 'center',
  boxShadow: '1px 1px 24px 0px rgb(30 46 62 / 73%)',
  width: 300,
  '@media (min-width: 768px)': {
    animation: `${animateDiagonal} 90s ease-in infinite normal forwards`,
  },
  '@media (min-width: 1024px)': {
    width: 320,
  },
  '@media (min-width: 2000px)': {
    width: 350,
  },
}));
const StyledCardTer = styled(Card)(({ theme }) => ({
  borderRadius: '50px 0px 50px 0px',
  backgroundColor: theme.palette.color.three,
  textAlign: 'center',
  boxShadow: '1px 1px 24px 0px rgb(30 46 62 / 73%)',
  width: 300,
  '@media (min-width: 768px)': {
    animation: `${animateHorizontal} 90s ease-in infinite normal forwards`,
  },
  '@media (min-width: 1024px)': {
    width: 320,
  },
  '@media (min-width: 2000px)': {
    width: 350,
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.color.one,
  color: '#fff',
  border: `2px solid ${theme.palette.color.one}`,
  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: theme.palette.color.two,
    color: theme.palette.color.two,
  },
  '&:active': {
    backgroundColor: 'transparent',
    borderColor: theme.palette.color.two,
    color: theme.palette.color.two,
  },
  borderRadius: 10,
  fontWeight: 400,
}));
const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  '& .MuiCardHeader-title': {
    fontWeight: 700,
    color: theme.palette.color.one,
  },
  '& .MuiCardHeader-subheader': {
    fontWeight: 700,
    color: '#fff',
  },
}));
const StyledCardActions = styled(CardActions)({
  justifyContent: 'center',
  paddingBottom: '2em',
});
const StyledTypoTitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: '200',
  color: theme.palette.color.one,
  textAlign: 'center',
  paddingTop: '0.5em',
  paddingBottom: '0.5em',
  '@media (max-width: 420px)': {
    fontSize: '2.5em',
  },
  '@media (min-width: 768px)': {
    textAlign: 'left',
    paddingLeft: '0.5em',
    paddingRight: '1em',
  },
  '& span': {
    color: theme.palette.color.three,
  },
}));
const StyledGridContainerOne = styled(Grid)({
  paddingLeft: '1em',
  paddingRight: '1em',
  paddingBottom: '1em',
  '@media (min-width: 768px)': {
    paddingBottom: 16,
    marginTop: '2em',
  },
});
const StyledGridContainerBis = styled(Grid)({
  '@media (min-width: 700px)': {
    paddingBottom: 16,
  },
  paddingLeft: '1em',
  paddingRight: '1em',
});
const StyledGridImage = styled(Grid)({
  position: 'relative',
  width: 100,
  height: 100,
  '@media (min-width: 1024px)': {
    width: 200,
    height: 125,
  },
});
const StyledGridCardOne = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  '@media (min-width: 768px)': {
    transform: 'translate(48%, -10%)',
  },
  '@media (min-width: 1024px)': {
    transform: 'translate(42%, -15%)',
  },
});
const StyledGridCardBis = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  '@media (min-width: 768px)': {
    transform: 'translate(-1%, -35%)',
  },
  '@media (min-width: 1024px)': {
    transform: 'translate(0%, -45%)',
  },
});
const StyledGridCardTer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  '@media (min-width: 768px)': {
    transform: 'translate(-12%,0%)',
  },
  '@media (min-width: 900px)': {
    transform: 'translate(-18%,3%)',
  },
});
const StyledBoxContainer = styled(Box)({
  '@media (min-width: 1024px)': {
    width: 1024,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3em',
    marginBottom: '2em',
  },
});

const Portfolio = ({ image3dinvest, imageDashboard, logo }) => (
  <StyledBox id="MesProjets">
    <Zoom in timeout={3000}>
      <StyledTypoTitle variant="h3">
        Mes projets <span> web </span>
      </StyledTypoTitle>
    </Zoom>
    <StyledBoxContainer>
      <StyledGridContainerOne
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <StyledGridCardOne item xs={12} sm={6} md={6}>
          <StyledCardOne>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              sx={{ paddingTop: '1.5em' }}
            >
              <StyledGridImage item xs={12}>
                <Image
                  src={image3dinvest}
                  layout="fill"
                  objectFit="contain"
                  alt="image_projet_3DInvest"
                  quality={100}
                />
              </StyledGridImage>
            </Grid>
            <StyledCardHeader
              title="3DInvest"
              subheader="#Redux / #Symfony / #PWA"
            />
            <StyledCardActions>
              <Link href="/MesProjets/3dinvest">
                <StyledButton
                  variant="outlined"
                  className="imageBis"
                  aria-label="Voir le projet"
                >
                  Voir le projet
                </StyledButton>
              </Link>
            </StyledCardActions>
          </StyledCardOne>
        </StyledGridCardOne>
      </StyledGridContainerOne>
      <StyledGridContainerBis
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <StyledGridCardBis item xs={12} sm={6} md={6}>
          <StyledCardBis>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              sx={{ paddingTop: '1.5em' }}
            >
              <StyledGridImage item xs={12}>
                <Image
                  src={imageDashboard}
                  layout="fill"
                  objectFit="contain"
                  alt="image_projet_Dashboard"
                  quality={100}
                />
              </StyledGridImage>
            </Grid>
            <StyledCardHeader
              title="DashBoard"
              subheader="#React / #Symfony / #MUI"
            />
            <StyledCardActions>
              <Link href="/MesProjets/Dashboard">
                <StyledButton
                  variant="outlined"
                  className="imageBis"
                  aria-label="Voir le projet"
                >
                  Voir le projet
                </StyledButton>
              </Link>
            </StyledCardActions>
          </StyledCardBis>
        </StyledGridCardBis>
        <StyledGridCardTer item xs={12} sm={6} md={6}>
          <StyledCardTer>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              sx={{ paddingTop: '1.5em' }}
            >
              <StyledGridImage item xs={12}>
                <Image
                  src={logo}
                  layout="fill"
                  objectFit="contain"
                  alt="logo_Site_ByLudivine"
                  quality={100}
                />
              </StyledGridImage>
            </Grid>

            <StyledCardHeader
              title="ByLudivine"
              subheader="#Next / #Emotion / #MUI"
            />
            <StyledCardActions>
              <Link href="/MesProjets/ByLudivine">
                <StyledButton
                  variant="outlined"
                  className="imageBis"
                  aria-label="Voir le projet"
                >
                  Voir le projet
                </StyledButton>
              </Link>
            </StyledCardActions>
          </StyledCardTer>
        </StyledGridCardTer>
      </StyledGridContainerBis>
    </StyledBoxContainer>
  </StyledBox>
);
Portfolio.propTypes = {
  image3dinvest: PropTypes.object.isRequired,
  imageDashboard: PropTypes.object.isRequired,
  logo: PropTypes.object.isRequired,
};
export default Portfolio;

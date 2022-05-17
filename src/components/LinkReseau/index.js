// import next
import Image from 'next/image';
import Link from 'next/link';
// import Emotion Style et keyframe pour animations
import styled from '@emotion/styled';
// import mui
import Zoom from '@mui/material/Zoom';
import {
  Grid,
  Typography,
  Box,
  Button,
} from '@mui/material';

// import interne
import TextTranslateInfinite from '@components/Animations/TextTranslateInfinite';
import morph1, { morph2, morph3 } from '@components/Animations/Morph';
import translate from '@components/Animations/Translate';

// style
const StyledBox = styled(Box)({
  marginTop: '3em',

});
const StyledGridContainer = styled(Grid)({
  textAlign: 'center',
  paddingTop: '2em',
  position: 'relative',
});
const StyledGridLink = styled(Grid)({
  marginBottom: '1.5em',
});
const StyledButtonImageOne = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.color.one}1a`,
  animation: `${morph1} 15s linear infinite alternate`,
  width: 100,
  height: 100,
  '@media (min-width: 768px)': {
    width: 150,
    height: 150,
  },
  '@media (min-width: 1400px)': {
    width: 200,
    height: 200,
  },
}));
const StyledButtonImageBis = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.color.one}1a`,
  animation: `${morph2} 15s linear infinite alternate`,
  width: 100,
  height: 100,
  '@media (min-width: 768px)': {
    width: 150,
    height: 150,
  },
  '@media (min-width: 1400px)': {
    width: 200,
    height: 200,
  },
}));
const StyledButtonImageTer = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.color.one}1a`,
  animation: `${morph3} 15s linear infinite alternate`,
  width: 100,
  height: 100,
  '@media (min-width: 768px)': {
    width: 150,
    height: 150,
  },
  '@media (min-width: 1400px)': {
    width: 200,
    height: 200,
  },
}));
const StyledImageOne = styled(Image)(({ theme }) => ({
  borderRadius: '30% 70% 70% 30% / 30% 52% 48% 70%',
  backgroundColor: `${theme.palette.color.one}1a`,
  animation: `${morph1} 15s linear infinite alternate`,
  '&:hover': {
    backgroundColor: `${theme.palette.color.one}40`,
  },

}));
const StyledImageBis = styled(Image)(({ theme }) => ({
  borderRadius: '70% 30% 30% 70% / 52% 30% 70% 48%',
  backgroundColor: `${theme.palette.color.one}1a`,
  animation: `${morph2} 15s linear infinite alternate`,
  '&:hover': {
    backgroundColor: `${theme.palette.color.one}40`,
  },
}));
const StyledImageTer = styled(Image)(({ theme }) => ({
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  backgroundColor: `${theme.palette.color.one}1a`,
  animation: `${morph3} 15s linear infinite alternate`,
  '&:hover': {
    backgroundColor: `${theme.palette.color.one}40`,
  },
}));

const StyledTypoTitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.color.one,
  fontWeight: '200',
  textAlign: 'center',
  paddingTop: '1em',
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
const StyledTypo = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: theme.typography.paragrapheSmall.fontSize,
  textTransform: 'uppercase',
  '@media (min-width: 768px)': {
    fontSize: theme.typography.paragraphe.fontSize,
  },
  '@media (min-width: 1440px)': {
    fontSize: '1.8em',
  },
  '& span': {
    fontWeight: 700,
    color: theme.palette.color.three,
  },
}));
const StyledGridGit = styled(Grid)({
  marginLeft: '1em',
  marginRight: '1em',
  marginTop: '1.5em',
  marginBottom: '1.5em',
  '@media (min-width: 1024px)': {
    marginTop: '3em',
    marginBottom: '3em',
    marginLeft: '3em',
    marginRight: '3em',
  },
});
const StyledGridContainerBis = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: theme.palette.color.one,
  borderRadius: 50,
  paddingTop: '2em',
  paddingBottom: '2em',
  '&::before': {
    content: '""',
    width: '15em',
    height: '15em',
    position: 'absolute',
    left: '5%',
    backgroundColor: '#ffffff47',
    borderRadius: '28% 72% 52% 48% / 45% 75% 25% 55%',
    animation: `${translate} 25s linear infinite alternate, ${morph1} 15s linear infinite`,
    '@media (min-width: 1024px)': {
      width: '20em',
      height: '20em',
    },
  },
  '@media (min-width: 1024px)': {
    paddingTop: '4em',
    paddingBottom: '4em',
  },
  '@media (min-width: 1440px)': {
    paddingTop: '5em',
    paddingBottom: '5em',
  },
}));
const StyledGridTypoBody = styled(Grid)({
  textAlign: 'center',
  paddingLeft: '1em',
  paddingRight: '1em',
  paddingBottom: '1em',
  '@media (min-width: 1024px)': {
    paddingRight: 0,
    paddingBottom: 0,
  },
});
const StyledGridButton = styled(Grid)({
  '@media (min-width: 1024px)': {
    textAlign: 'left',
  },
});
const StyledButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  border: `2px solid ${theme.palette.color.three}`,
  backgroundColor: theme.palette.color.three,
  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: theme.palette.color.three,
    color: theme.palette.color.three,
  },
  '&:active': {
    backgroundColor: 'transparent',
    borderColor: theme.palette.color.three,
    color: theme.palette.color.three,
  },
  fontWeight: 400,
  borderRadius: 10,
}));

const LinkReseau = ({ imageTwitter, imageGithub, imageLinkedin }) => (
  <StyledBox>
    <TextTranslateInfinite />
    <Zoom in timeout={3000}>
      <StyledTypoTitle variant="h3" component="h3">
        Me <span> suivre </span>
      </StyledTypoTitle>
    </Zoom>
    <StyledGridContainer
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      id="Link"
      spacing={1}
    >
      <StyledGridLink item xs={12} sm={4}>
        <Link href="https://twitter.com/LudivineTwit">
          <a target="_blank">
            <StyledButtonImageOne className="imageBis">
              <StyledImageOne
                src={imageTwitter}
                alt="image_Twitter"
                quality={100}
              />
            </StyledButtonImageOne>
          </a>
        </Link>
      </StyledGridLink>
      <StyledGridLink item xs={12} sm={4}>
        <Link href="https://www.linkedin.com/in/ludivineblot">
          <a target="_blank">
            <StyledButtonImageBis className="imageBis">
              <StyledImageBis
                src={imageLinkedin}
                alt="image_Twitter"
                quality={100}
              />
            </StyledButtonImageBis>
          </a>
        </Link>
      </StyledGridLink>
      <StyledGridLink item xs={12} sm={4}>
        <Link href="https://github.com/ludibel">
          <a target="_blank">
            <StyledButtonImageTer className="imageBis">
              <StyledImageTer
                src={imageGithub}
                alt="image_Twitter"
                quality={100}
              />
            </StyledButtonImageTer>
          </a>
        </Link>
      </StyledGridLink>
    </StyledGridContainer>
    <StyledGridGit item sx={12}>
      <StyledGridContainerBis
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <StyledGridTypoBody item xs={12} md={9}>
          <StyledTypo>
            Pour découvrir le <span> code source </span> complet de ce site
          </StyledTypo>
        </StyledGridTypoBody>
        <StyledGridButton item xs={12} md={3}>
          <StyledButton
            size="large"
            className="imageBis"
            href="https://github.com/ludibel/ByLudivine_public"
            target="_blank"
            aria-label="Accéder au code source du site"
          >
            Cliquez ici
          </StyledButton>
        </StyledGridButton>
      </StyledGridContainerBis>
    </StyledGridGit>
  </StyledBox>
);

export default LinkReseau;

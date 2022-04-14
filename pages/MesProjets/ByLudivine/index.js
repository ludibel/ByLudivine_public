// import react/next
import Image from 'next/image';
// import style emotion
import styled from '@emotion/styled';
/// import mui
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
// import components
import Container from '@components/Container';
import HeaderPage from '@components/HeaderPage';
import CardProjet from '@components/Cards/CardProjet';
import CardCompetence from '@components/Cards/CardCompetence';
import CardTechno from '@components/Cards/CardTechno';
// import images / logos
import imageSiteByludivine from '@public/imagesPortFolio/portfolio_bl.png';
// import des données
import {
  listLogo,
  textProjet,
  textCompetence,
} from '@datas/DatasByLudivine';
// style
const StyledGridContainer = styled(Grid)({
  textAlign: 'center',
  padding: '1em 1em',
  marginBottom: '12em',
  '@media (min-width: 768px)': {
    padding: '1em 2em',
  },
  '@media (min-width: 1440px)': {
    padding: '1em 10em',
  },
  '@media (min-width: 2000px)': {
    padding: '1em 20em',
  },
  '@media (min-width: 3000px)': {
    padding: '1em 0em',
  },
});
const StyledGrid = styled(Grid)({
  borderRadius: 5,
});
const Item = styled(Card)(({ theme }) => ({
  padding: '1em',
  textAlign: 'center',
  color: theme.palette.color.three,
  backgroundColor: theme.palette.color.seven,
  borderRadius: 15,
  '@media (min-width: 768px) and (max-width: 1200px)': {
    height: 400,
  },
  '@media (min-width: 1200px)': {
    height: '100%',
  },
}));
const ItemCardImageOne = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.color.three,
  '@media (min-width: 1024px)': {
    padding: '2em',
  },
  padding: '1em',
  textAlign: 'center',
  color: theme.palette.color.three,

  borderRadius: 15,
  height: '100%',
}));
const StyledCardContent = styled(CardContent)({
  position: 'relative',
  height: 150,
  '@media (min-width: 768px)': {
    height: '100%',
  },
});
const StyledGridImage = styled(Grid)({
  height: '100%',
});
const StyledGridContainerImage = styled(Grid)({
  height: '100%',
});
const StyledGridItem = styled(Grid)({
  height: '100%',
  marginTop: 0,
});
const StyledGridTitle = styled(Grid)({
  marginTop: '1em',
  marginBottom: '1em',
});
const StyledTypoTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  fontSize: '1.5em',
  '@media(min-width: 376px)': {
    fontSize: '2em',
  },
  '@media(min-width: 768px)': {
    fontSize: '3em',
  },
}));
const ProjetByLudivine = () => (
  <Container title="ByLudivine_Portfolio">
    <HeaderPage title="ByLudivine" variant="body1" />
    <StyledGridContainer
      container
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      direction="row"
    >
      <StyledGridTitle item xs={12}>
        <StyledTypoTitle variant="h1" component="h1">
          Projet de site Internet professionnel
        </StyledTypoTitle>
      </StyledGridTitle>
      <StyledGrid item xs={12} lg={8}>
        <Item elevation={0}>
          <StyledGridItem container spacing={1} alignItems="center">
            <StyledGridImage item xs={12}>
              <StyledGridContainerImage
                container
                alignItems="center"
                spacing={1}
              >
                <StyledGridImage item xs={12}>
                  <ItemCardImageOne elevation={0}>
                    <StyledCardContent>
                      <Image
                        src={imageSiteByludivine}
                        alt="image site Byludivine"
                        quality={100}
                        layout="fill"
                        objectFit="contain"
                      />
                    </StyledCardContent>
                  </ItemCardImageOne>
                </StyledGridImage>
              </StyledGridContainerImage>
            </StyledGridImage>
          </StyledGridItem>
        </Item>
      </StyledGrid>
      <StyledGrid item xs={12} lg={4}>
        <CardProjet datas={textProjet} />
      </StyledGrid>
      <StyledGrid item xs={12} lg={6}>
        <CardTechno listLogo={listLogo} />
      </StyledGrid>
      <StyledGrid item xs={12} lg={6}>
        <CardCompetence datas={textCompetence} />
      </StyledGrid>
    </StyledGridContainer>
  </Container>
);

export default ProjetByLudivine;

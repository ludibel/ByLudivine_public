// import tyle Emotion
import styled from '@emotion/styled';
// import mui
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
// import interne
import HeaderPage from '@components/HeaderPage';
import Container from '@components/Container';

// style
const StyledCard = styled(Card)(({ theme }) => ({
  padding: '1em',
  textAlign: 'center',
  color: theme.palette.color.three,
  borderRadius: 15,
  height: '100%',
  margin: '1em 1em',
  boxShadow: '0px 0px 9px 0px #1e2e3e59',
  '@media (min-width: 1024px)': {
    margin: '2em 4em',
  },
  '@media (min-width: 1440px)': {
    margin: '2em 10em',
  },
  '@media (min-width: 1800px)': {
    margin: '2em 30em',
  },
}));
const StyledTypoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.color.one,
  paddingLeft: 5,
  fontSize: '2em',
}));
const StyledTypoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  textAlign: 'justify',
  paddingTop: '0.5em',
  paddingBottom: '0.5em',
  '& span': {
    fontWeight: 700,
    textDecoration: 'underline',
  },
  '& a': {
    color: theme.palette.color.one,
  },
}));
const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.color.three,
}));
const StyledDiv = styled('div')({
  marginBottom: '12em',
});

const LegalNotice = () => (
  <Container title="Mentions Légales">
    <HeaderPage title="Mentions Légales" variant="h1" />
    <StyledDiv>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">1-Définitions</StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">
              2-Présentation du site
            </StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">3-Crédits</StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">
              4-Objectif du site Internet
            </StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">
              5-Propriété intellectuelle
            </StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">
              6-Limites de responsabilité de l'éditrice
            </StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">
              7-Régles d'usage d'Internet
            </StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">
              8-Données collectées
            </StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">
              9-Conservation des données collectées
            </StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">10-Cookies</StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">11-Sécurité</StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ textAlign: 'left' }}
            spacing={1}
          >
            <StyledTypoTitle variant="h2">
              12-Droit applicable
            </StyledTypoTitle>
          </Grid>
        </CardContent>
        <StyledDivider />
        <CardContent>
          <StyledTypoText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque incidunt corporis quod saepe dicta laudantium dolorem dolores praesentium,
            officiis quis.
          </StyledTypoText>
        </CardContent>
      </StyledCard>
    </StyledDiv>
  </Container>
);

export default LegalNotice;

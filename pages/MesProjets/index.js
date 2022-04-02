// import react / next
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import Emotion style
import styled from '@emotion/styled'
// import composants
import Container from '../../src/components/Container'
import HeaderPage from '../../src/components/HeaderPage'
import image3dinvest from '../../public/imagesPortFolio/application-3dinvest.png'
import imageDashboard from '../../public/imagesPortFolio/dashboard_image1B.png'
import imageByLudivine from '../../public/imagesPortFolio/portfolio_bl.png'
// import mui
import { Grid, Button, Typography } from '@mui/material'

const StyledGridContainer = styled(Grid)({
  textAlign: 'center',
  padding: '1em 1em',
  marginBottom: '10em',
  '@media (min-width: 768px)': {
    padding: '1em 2em',
  },
  '@media (min-width: 1440px)': {
    padding: '1em 10em',
  },
  '@media (min-width: 2000px)': {
    padding: '1em 25em',
  },
  '@media (min-width: 3000px)': {
    padding: '1em 0em',
  },
  '@media (max-width: 768px)': {
    flexDirection: 'row-reverse',
  },
})
const StyledGridCard = styled(Grid)({ marginBottom: '1.5em' })
const StyledTypoTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  fontSize: '1.5em',
  '@media(min-width: 376px)': {
    fontSize: '2em',
  },
  '@media(min-width: 768px)': {
    fontSize: '3em',
  },
}))
const StyledGridTitle = styled(Grid)({
  marginTop: '1em',
  marginBottom: '1em',
})
const StyledGridImage = styled(Grid)(({ theme }) => ({
  position: 'relative',
  padding: 8,
  borderRadius: '5px',
  boxShadow: '1px 1px 24px 0px rgb(30 46 62 / 73%)',
  transform: 'translate(0, -5%)',
  backgroundColor: theme.palette.color.three,
  '@media (min-width: 768px)': {
    width: '100%',
    height: 200,
    transform: 'translate(-10%)',
  },
  '@media (max-width:767px)': {
    display: 'none',
  },
}))
const StyledGridImageBis = styled(Grid)(({ theme }) => ({
  position: 'relative',
  padding: 8,
  borderRadius: '5px',
  boxShadow: '1px 1px 24px 0px rgb(30 46 62 / 73%)',
  transform: 'translate(0, -5%)',
  backgroundColor: theme.palette.color.three,
  '@media (min-width: 768px)': {
    width: '100%',
    height: 200,
    transform: 'translate(10%)',
  },
  '@media (max-width:767px)': {
    display: 'none',
  },
}))
const StyledGridImageMobile = styled(Grid)(({ theme }) => ({
  '@media (min-width:768px)': {
    display: 'none',
  },
}))
const StyledGridText = styled(Grid)({
  backgroundImage: `url('bg_bubble_bis.png')`,
  backgroundSize: 'cover',
  backgroundColor: '#F5F5F5',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

const StyledTypoTextOne = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.one,
  fontSize: '2em',
  marginBottom: '1em',
  marginTop: '0.3em',
  '@media (min-width:768px)': {
    padding: '0 1em',
  },
}))
const StyledTypoSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  fontSize: '1em',
  marginBottom: '1em',
  fontWeight: 700,
}))
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.color.three,
  color: '#fff',
  border: `2px solid ${theme.palette.color.three}`,
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
  marginBottom: '2em',
  marginTop: '1em',
}))
const StyledDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  '& span': {
    margin: 10,
  },
}))
const MesProjets = () => {
  return (
    <Container title="ByLudivine_MesProjets">
      <HeaderPage title="Mes Projets" />
      <StyledGridContainer
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <StyledGridTitle item xs={12}>
          <StyledTypoTitle variant="h1">
            Découvrez mes réalisations
          </StyledTypoTitle>
        </StyledGridTitle>
        <StyledGridCard item xs={12}>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <StyledGridText item xs={12} sm={8}>
              <StyledTypoTextOne variant="h2">
                Projet d'une application Web <br />
                d'investissement immobilier
              </StyledTypoTextOne>
              <StyledTypoSubtitle variant="subtitle1" component="div">
                Réalisé avec Redux, Symfony et Mui
              </StyledTypoSubtitle>
              <StyledGridImageMobile item xs={12} sm={4}>
                <Image
                  src={image3dinvest}
                  width={120}
                  height={150}
                  alt="image_projet_3dinvest"
                  quality={100}
                />
              </StyledGridImageMobile>
              <Link href="/MesProjets/3dinvest">
                <StyledButton variant="outlined" className="imageBis">
                  Voir le projet
                </StyledButton>
              </Link>
            </StyledGridText>
            <StyledGridImage item xs={12} sm={4}>
              <StyledDiv>
                <Image
                  src={image3dinvest}
                  layout="fill"
                  objectFit="contain"
                  alt="image_projet_3dinvest"
                  quality={100}
                />
              </StyledDiv>
            </StyledGridImage>
          </Grid>
        </StyledGridCard>
        <StyledGridCard item xs={12}>
          <Grid
            container
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <StyledGridImageBis item xs={12} sm={4}>
              <StyledDiv>
                <Image
                  src={imageDashboard}
                  layout="fill"
                  objectFit="contain"
                  alt="image_projet_Dashboard"
                  quality={100}
                />
              </StyledDiv>
            </StyledGridImageBis>
            <StyledGridText item xs={12} sm={8}>
              <StyledTypoTextOne variant="h2">
                Projet d'application web <br />
                de réalisation d'un dashboard
              </StyledTypoTextOne>
              <StyledTypoSubtitle variant="subtitle1" component="div">
                Réalisé avec React, Symfony et Mui
              </StyledTypoSubtitle>
              <StyledGridImageMobile item xs={12} sm={4}>
                <Image
                  src={imageDashboard}
                  width={170}
                  height={120}
                  alt="image_projet_Dashboard"
                  quality={100}
                />
              </StyledGridImageMobile>
              <Link href="/MesProjets/Dashboard">
                <StyledButton variant="outlined" className="imageBis">
                  Voir le projet
                </StyledButton>
              </Link>
            </StyledGridText>
          </Grid>
        </StyledGridCard>
        <StyledGridCard item xs={12}>
          <Grid
            container
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <StyledGridText item xs={12} sm={8}>
              <StyledTypoTextOne variant="h2">
                Projet d'un site Internet <br /> professionnel responsive
              </StyledTypoTextOne>
              <StyledTypoSubtitle variant="subtitle1" component="div">
                Réalisé avec React, Nextjs et Mui
              </StyledTypoSubtitle>
              <StyledGridImageMobile item xs={12} sm={4}>
                <Image
                  src={imageByLudivine}
                  width={170}
                  height={120}
                  alt="image_projet_ByLudivine"
                  quality={100}
                />
              </StyledGridImageMobile>
              <Link href="/MesProjets/ByLudivine">
                <StyledButton variant="outlined" className="imageBis">
                  Voir le projet
                </StyledButton>
              </Link>
            </StyledGridText>
            <StyledGridImage item xs={12} sm={4}>
              <StyledDiv>
                <Image
                  src={imageByLudivine}
                  layout="fill"
                  objectFit="contain"
                  alt="image_projet_ByLudivine"
                  quality={100}
                />
              </StyledDiv>
            </StyledGridImage>
          </Grid>
        </StyledGridCard>
      </StyledGridContainer>
    </Container>
  )
}

export default MesProjets

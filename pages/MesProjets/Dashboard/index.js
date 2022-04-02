// import react/next
import { useState, useEffect, useCallback } from 'react'
//import style emotion
import styled from '@emotion/styled'
/// import mui
import { Grid, Card, Typography } from '@mui/material'
import Slide from '@mui/material/Slide'

// import components
import ModalImage from '../ModalImage'
import Container from '../../../src/components/Container'
import HeaderPage from '../../../src/components/HeaderPage'
import Carousel from '../../../src/components/Carousel'
import Arrow from '../../../src/components/Carousel/Arrow'
import CardProjet from '../../../src/components/Cards/CardProjet'
import CardCompetence from '../../../src/components/Cards/CardCompetence'
import CardTechno from '../../../src/components/Cards/CardTechno'
// import des données
import {
  listLogo,
  textProjet,
  textCompetence,
  slideInfo,
} from '../../../src/datas/DatasDashboard'
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
})
const StyledGrid = styled(Grid)({
  borderRadius: 5,
})
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
}))
const ItemCardImageOne = styled(Card)(({ theme }) => ({
  height: 250,
  '@media (min-width: 768px)': {
    height: '100%',
  },
  '@media (min-width: 1024px)': {
    padding: '2em',
  },
  padding: '1em',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: theme.palette.color.three,
  borderRadius: 15,
}))
const StyledGridImage = styled(Grid)({
  height: '100%',
})
const StyledGridItem = styled(Grid)({
  height: '100%',
  marginTop: 0,
})
const StyledGridCarousel = styled(Grid)({
  position: 'relative',
  height: '100%',
  cursor: 'zoom-in',
})
const StyledGridTitle = styled(Grid)({
  marginTop: '1em',
  marginBottom: '1em',
})
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
const ProjetDashboard = () => {
  // state pour la gestion de la modal ModalImage
  const [openModal, setOpenModal] = useState(false)
  const [srcImage, setSrcImage] = useState('')
  const [titleImage, setTitleImage] = useState('')
  // gestion du carousel
  // index permet de savoir sur quelle diapo on se situe
  const [index, setIndex] = useState(0)
  // definition du slide et sa direction selon que l'on soit à droite ou à gauche
  const [slideIn, setSlideIn] = useState(true)
  const [slideDirection, setSlideDirection] = useState('left')
  const content = slideInfo[index]
  const numSlides = slideInfo.length
  // e.keyCode permet de slider sur les images avec les fléches du clavier
  // useCallback permer de ne pas déclencher l'evenement useEffect à chaque rendu du composant
  const handleKeyPress = useCallback((e) => {
    if (e.keyCode === 39) {
      onArrowClick('right')
    }
    if (e.keyCode === 37) {
      onArrowClick('left')
    }
  }, [])
  useEffect(() => {
    // ajoute l'évenement
    document.addEventListener('keydown', handleKeyPress)
    // supprime l'évenement
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])
  // fonction permettant de prendre une direction et de mettre à jour l'index
  const onArrowClick = (direction) => {
    // incrémentation selon la direction
    const increment = direction === 'left' ? -1 : 1
    const newIndex = (index + increment + numSlides) % numSlides
    const oppDirection = direction === 'left' ? 'right' : 'left'
    setSlideDirection(direction)
    setSlideIn(false)
    // setTimeout permet de mettre en place un tempo entre la sortie de la diapo actuelle et l'entrée de la prochaine diapo
    setTimeout(() => {
      setIndex(newIndex)
      setSlideDirection(oppDirection)
      setSlideIn(true)
    }, 100)
    setIndex(newIndex)
    setSlideDirection(oppDirection)
    setSlideIn(true)
  }
  // ouverture de ModalImage pour zoomer sur les photos
  const handleOpen = (place, title) => (evt) => {
    setSrcImage(place.src)
    setTitleImage(title)
    setOpenModal(true)
  }
  // fermeture de Modalmage
  const handleClose = () => setOpenModal(false)

  return (
    <>
      <ModalImage
        open={openModal}
        onClose={handleClose}
        image={srcImage}
        title={titleImage}
        alt={titleImage}
      />
      <Container title="ByLudivine_Portfolio">
        <HeaderPage title="DashBoard" variant="body1" />
        <StyledGridContainer
          container
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          direction="row"
        >
          <StyledGridTitle item xs={12}>
            <StyledTypoTitle variant="h1" component="h1">
              Projet d'application web de réalisation d'un dashboard
            </StyledTypoTitle>
          </StyledGridTitle>
          <StyledGrid item xs={12} lg={8}>
            <Item elevation={0}>
              <StyledGridItem container spacing={1} alignItems="center">
                <StyledGridImage item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    spacing={1}
                    sx={{ height: '100%' }}
                  >
                    <StyledGridImage item xs={12}>
                      <ItemCardImageOne elevation={0}>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ height: '100%' }}
                        >
                          <Grid item xs={1}>
                            <Arrow
                              direction="left"
                              onClick={() => onArrowClick('left')}
                            />
                          </Grid>
                          <Slide in={slideIn} direction={slideDirection}>
                            <StyledGridCarousel
                              item
                              xs={10}
                              onClick={handleOpen(content.src, content.title)}
                            >
                              <Carousel
                                image={content.src}
                                altImage={content.alt}
                              />
                            </StyledGridCarousel>
                          </Slide>
                          <Grid item xs={1}>
                            <Arrow
                              direction="right"
                              onClick={() => onArrowClick('right')}
                            />
                          </Grid>
                        </Grid>
                      </ItemCardImageOne>
                    </StyledGridImage>
                  </Grid>
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
    </>
  )
}

export default ProjetDashboard

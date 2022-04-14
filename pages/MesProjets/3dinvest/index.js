// import react /next
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import style emotion
import styled from '@emotion/styled';
// import mui
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
import ModalImage from 'pages/MesProjets/ModalImage';
// import images/ logos
import image3dinvest from '@public/imagesPortFolio/application-3dinvestpro.png';
import imagePdf from '@public/imagesPortFolio/image_pdf_2.png';
// import des données
import {
  listImage,
  listLogo,
  textProjet,
  textCompetence,
} from '@datas/Datas3dinvest';
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
const ItemCardImageBis = styled(Card)(({ theme }) => ({
  padding: '1em',
  textAlign: 'center',
  color: theme.palette.color.three,
  borderRadius: 15,
  height: '100%',
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

const StyledGridImageSmall = styled(Grid)({ height: '50%' });

const Projet3dinvest = () => {
  // state pour l'ouverture de ModalImage
  const [openModal, setOpenModal] = useState(false);
  const [srcImage, setSrcImage] = useState('');
  const [titleImage, setTitleImage] = useState('');
  // fonction pour l'ouverture de ModalImage
  const handleOpen = (place, title) => () => {
    setSrcImage(place.src);
    setTitleImage(title);
    setOpenModal(true);
  };
  // fonction pour la fermeture de ModalImage
  const handleClose = () => setOpenModal(false);

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
        <HeaderPage title="3DInvest" variant="body1" />
        <StyledGridContainer
          container
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          direction="row"
        >
          <StyledGridTitle item xs={12}>
            <StyledTypoTitle variant="h1" component="h1">
              Projet d'application Web d'investissement immobilier
            </StyledTypoTitle>
          </StyledGridTitle>
          <StyledGrid item xs={12} lg={8}>
            <Item elevation={0}>
              <StyledGridItem container spacing={1} alignItems="center">
                <StyledGridImage item xs={12} sm={6}>
                  <StyledGridContainerImage
                    container
                    alignItems="center"
                    spacing={1}
                  >
                    <StyledGridImage item xs={12}>
                      <ItemCardImageOne elevation={0}>
                        <StyledCardContent>
                          <Image
                            src={image3dinvest}
                            alt="3DInvest_image"
                            quality={100}
                            layout="fill"
                            objectFit="contain"
                            className="image"
                            onClick={handleOpen(
                              image3dinvest,
                              'Application 3DInvest',
                            )}
                          />
                        </StyledCardContent>
                      </ItemCardImageOne>
                    </StyledGridImage>
                  </StyledGridContainerImage>
                </StyledGridImage>

                <StyledGridImage item xs={12} sm={6}>
                  <StyledGridContainerImage
                    container
                    alignItems="center"
                    justifycontent="center"
                    spacing={1}
                  >
                    {listImage.map((image) => (
                      <StyledGridImageSmall item xs={6} sm={6} key={image.title}>
                        <ItemCardImageBis elevation={0}>
                          <StyledCardContent
                            onClick={handleOpen(image.src, image.title)}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              quality={100}
                              layout="fill"
                              objectFit="contain"
                              placeholder="blur"
                              className="image"
                            />
                          </StyledCardContent>
                        </ItemCardImageBis>
                      </StyledGridImageSmall>
                    ))}
                    <StyledGridImageSmall item xs={6} sm={6}>
                      <ItemCardImageBis elevation={0}>
                        <Link href="https://www.investissement-locatif-intelligent.fr/wp-content/uploads/dossier-banque-appli-3Dinvest-specimen.pdf">
                          <a target="_blank">
                            <StyledCardContent>
                              <Image
                                src={imagePdf}
                                quality={100}
                                alt="image._pdf"
                                layout="fill"
                                objectFit="contain"
                                className="image"
                              />
                            </StyledCardContent>
                          </a>
                        </Link>
                      </ItemCardImageBis>
                    </StyledGridImageSmall>
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
    </>
  );
};

export default Projet3dinvest;

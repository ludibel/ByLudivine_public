// import tyle Emotion
import styled from '@emotion/styled';
// import mui
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
} from '@mui/material';
// import interne
import HeaderPage from '../../src/components/HeaderPage';
import Container from '../../src/components/Container';
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
const StyledTypoTextTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  textAlign: 'justify',
  fontWeight: 700,
  textDecoration: 'underline',
  fontSize: '1.2em',
}));
const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.color.three,
}));
const StyledTypoTextBis = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  textAlign: 'justify',
  fontStyle: 'italic',
  paddingTop: '1em',
}));
const StyledTypoTextTer = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.one,
  textAlign: 'center',
  paddingTop: '1em',
  fontWeight: 700,
}));
const StyledList = styled(List)({
  fontWeight: 700,
});
const StyledDiv = styled('div')({
  marginBottom: '12em',
});
const StyledTypoList = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.three,
  '& a': {
    color: theme.palette.color.one,
  },
}));
function LegalNotice() {
  return (
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
            <StyledTypoTextTitle variant="h3">Contenu</StyledTypoTextTitle>
            <StyledTypoText>
              Ensemble des éléments constituants l'information présente sur le
              site Internet, notament textes,images,vidéos.
            </StyledTypoText>
            <StyledTypoTextTitle variant="h3">
              Utilisateurs
            </StyledTypoTextTitle>
            <StyledTypoText>
              Internaute utilisant le site
              {' '}
              <a>https://www.byludivine.com</a>
            </StyledTypoText>
            <StyledTypoTextTitle variant="h3">
              Informations à caractères personnels
            </StyledTypoTextTitle>
            <StyledTypoText>
              « Les informations qui permettent, sous quelque forme que ce
              soit, directement ou non, l’identification des personnes
              physiques auxquelles elles s’appliquent » (article 4 de la loi
              n° 78-17 du 6 janvier 1978). Les termes « données à caractère
              personnel », « personne concernée », « sous-traitant » et «
              données sensibles » ont le sens défini par le Règlement Général
              sur la Protection des Données (RGPD : n° 2016-679)
            </StyledTypoText>
            <StyledTypoTextTitle variant="h3">
              Le site Internet
            </StyledTypoTextTitle>
            <StyledTypoText>
              Il est fait référence au site sur lequel sont présentes ces
              mentions légales à savoir
              {' '}
              <a>https://www.byludivine.com</a>
              .
            </StyledTypoText>
            <StyledTypoTextBis>
              En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004
              pour la confiance dans l’économie numérique, il est précisé aux
              utilisateurs du site Internet l’identité des différents
              intervenants dans le cadre de sa réalisation et de son suivi :
            </StyledTypoTextBis>
            <StyledTypoTextTer>EDITRICE</StyledTypoTextTer>
            <StyledTypoText>
              <span>Sociète:</span>
              {' '}
              Ludivine BLOT
            </StyledTypoText>
            <StyledTypoText>
              <span>Adresse:</span>
              {' '}
              4 cours marquis-92350 LE PLESSIS ROBINSON
            </StyledTypoText>
            <StyledTypoText>
              <span>SIREN:</span>
              {' '}
              811 747 161 00016
            </StyledTypoText>
            <StyledTypoText>
              <span>Moyen de contact:</span>
              {' '}
              formulaire de contact sur le site
              {' '}
              <a>https://www.byludivine.com</a>
            </StyledTypoText>
            <StyledTypoText>
              <span>Responsable de publication:</span>
              {' '}
              Ludivine BLOT
            </StyledTypoText>
            <StyledTypoTextTer>HEBERGEUR</StyledTypoTextTer>
            <StyledTypoText>
              <span>Sociéte:</span>
              {' '}
              O2switch
            </StyledTypoText>
            <StyledTypoText>
              <span>Siret:</span>
              {' '}
              510 909 807 00024
            </StyledTypoText>
            <StyledTypoText>
              <span>RCS:</span>
              {' '}
              Clermont Ferrand
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
              Le contenu de ce site Internet est publié par Ludivine BLOT,
              désignée ci-dessous par l'éditrice. Le présent document a pour
              objet de définir les modalités et conditions dans lesquelles
              l'éditrice met à disposition des utilisateurs l’accès et
              l'utilisation du site Internet
              {' '}
              <a>https://www.byludivine.com</a>
              .Pour l’utilisateur, l’accès au site Internet implique
              l’acceptation de l’ensemble des conditions décrites dans ce
              document.
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
              Les visuels et illustrations proviennent des captures d'écran
              des apllications ou sites Internet développés par Ludivine et
              des différentes banques d’images suivantes:
            </StyledTypoText>
            <StyledTypoText>
              <a>https://www.freepik.com/</a>
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
              Le site
              {' '}
              <a>https://www.byludivine.com</a>
              {' '}
              a pour objectif de
              présenter les compétences de Ludivine au travers de son
              portfolio. Un formulaire de contact permet de prendre attache
              avec elle dans le but de solliciter ses services.
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
              La structure, les textes, graphiques et images sont des contenus
              élaborés par l'éditrice du site. Toute reproduction ou copie du
              contenu du site
              {' '}
              <a>https://www.byludivine.com </a>
              par quelque
              procédé que ce soit, sans l’autorisation préalable et par écrit
              de Ludivine BLOT est strictement interdite et serait susceptible
              de constituer une contrefaçon au sens de l’article L 335-2 et
              suivant du Code de la propriété intellectuelle. Cependant, des
              liens vers le site Internet
              {' '}
              <a>https://www.byludivine.com</a>
              {' '}
              sont autorisés sous réserve de respecter la conformité à l’objet
              de celui-ci.
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
              Ludivine BLOT se réserve le droit d’apporter des modifications
              au contenu du site
              {' '}
              <a>https://www.byludivine.com</a>
              {' '}
              pouvant
              conduire à l’inaccessibilité de celui-ci. De même, les présentes
              mentions légales sont susceptibles d’être modifiées ou
              complétées à tout moment. Les utilisateurs sont donc invités à
              les consulter de manière régulière.
            </StyledTypoText>
            <StyledTypoText>
              L'éditrice' s’efforce de permettre l’accès au site 24 heures sur
              24, 7 jours sur 7, sauf en cas de force majeure ou d’un
              événement hors de son contrôle, et sous réserve des éventuelles
              pannes et interventions de maintenance nécessaires au bon
              fonctionnement du site et des services.
            </StyledTypoText>
            <StyledTypoText>
              Par conséquent, l’éditrice ne peut garantir une disponibilité du
              site et/ou des services, une fiabilité des transmissions et des
              performances en termes de temps de réponse ou de qualité. Il
              n’est prévu aucune assistance technique vis à vis de
              l’utilisateur que ce soit par des moyens électronique ou
              téléphonique.
            </StyledTypoText>
            <StyledTypoText>
              La responsabilité de l'éditrice ne saurait être engagée en cas
              d’impossibilité d’accès à ce site Internet. Par ailleurs,
              l’éditrice peut être amenée à interrompre l’accès au site
              {' '}
              <a>https://www.byludivine.com</a>
              {' '}
              à tout moment, sans préavis,
              le tout sans droit à indemnités.
            </StyledTypoText>
            <StyledTypoText>
              L'éditrice ne pourra être tenue responsable des dommages directs
              et indirects causés au matériel de l’utilisateur, lors de
              l’accès au site Internet et résultant, soit de l’utilisation
              d’un matériel obsolète avec la technologie web utilisée par
              {' '}
              <a>https://www.byludivine.com</a>
              , soit de l’apparition d’un bug
              ou d’une incompatibilité.
            </StyledTypoText>
            <StyledTypoText>
              L’utilisateur reconnaît et accepte que l’éditrice ne soit pas
              responsable des interruptions, et des conséquences qui peuvent
              en découler pour l’utilisateur ou tout tiers.
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
              L’utilisateur déclare accepter les caractéristiques et les
              limites d’Internet et notamment reconnaît que l’éditrice
              n’assume aucune responsabilité sur les services accessibles par
              Internet et n’exerce aucun contrôle de quelque forme que ce soit
              sur la nature et les caractéristiques des données qui pourraient
              transiter. L’utilisateur reconnaît que les données circulant sur
              Internet ne sont pas protégées notamment contre les
              détournements éventuels.
            </StyledTypoText>
            <StyledTypoText>
              La communication de toute information jugée par l’utilisateur de
              nature sensible ou confidentielle se fait à ses risques et
              périls.
            </StyledTypoText>
            <StyledTypoText>
              L’utilisateur reconnaît que les données circulant sur Internet
              peuvent être réglementées en termes d’usage ou être protégées
              par un droit de propriété. L’utilisateur est seul responsable de
              l’usage des données qu’il consulte, interroge et transfère sur
              Internet. L’utilisateur reconnaît que l’éditricz ne dispose
              d’aucun moyen de contrôle sur le contenu des services
              accessibles sur Internet.
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
              Le site Internet
              {' '}
              <a>https://www.byludivine.com</a>
              {' '}
              ne collecte
              automatiquement aucunes données provenant des utilisateurs.
            </StyledTypoText>
            <StyledTypoText>
              Les informations à caractère personnel des utilisateurs
              recueillies par le biais du formulaire de contact du site
              {' '}
              <a>https://www.byludivine.com</a>
              {' '}
              font l’objet d’un traitement
              informatique. Ces informations seront uniquement conservées par
              l'éditrice dans le cadre des échanges nécessaires afin de
              répondre aux besoins des utilisateurs et uniquement dans ce cas.
            </StyledTypoText>
            <StyledTypoText>
              Conformément à la loi « informatique et libertés » du 6 janvier
              1978 modifiée en 2004, l’utilisateur bénéficie d’un droit
              d’accès et de rectification aux informations qui le concernent,
              qu’il peut exercer en adressant un email à l'éditrice au travers
              du formulaire de contact du site
              {' '}
              <a>https://www.byludivine.com</a>
              .
            </StyledTypoText>
            <StyledTypoText>
              L’utilisateur peut également s’opposer au traitement des données
              le concernant et demander la suppression de ces informations par
              ce même biais.
            </StyledTypoText>
            <StyledTypoText>
              L'éditrice' ne cède ni ne loue les données à caractère personnel
              des utilisateurs à des tiers à des fins marketings.
            </StyledTypoText>
            <StyledTypoText>
              La divulgation des données à caractère personnels à des tiers ne
              pourra intervenir que sur demande des autorités légalement
              compétentes, sur réquisition judiciaire ou dans le cadre d’un
              contentieux judiciaire.
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
              Pour satisfaire à ses obligations légales ou afin de disposer
              des éléments nécessaires pour faire valoir ses droits,
              l’éditrice pourra archiver les données dans les conditions
              prévues par la réglementation.
            </StyledTypoText>
            <StyledTypoText>
              Ainsi, les données à caractère personnel collectées par
              l'éditrice relatives à l’identité et aux coordonnées de ses
              contacts, prospects et clients sont archivées pendant une durée
              maximum de trois (3) ans après la cessation des relations
              contractuelles pour les contacts, prospects et clients, ou à
              compter de leur collecte par le responsable de traitement ou du
              dernier contact émanant du contact, du prospect ou du client
              pour les données relatives à ces derniers.
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
              Un « cookie » est un petit fichier d’information envoyé sur le
              navigateur de l’utilisateur et enregistré au sein du terminal de
              l’utilisateur (ex : ordinateur, smartphone), (ci-après « cookies
              »). Ce fichier comprend des informations telles que le nom de
              domaine de l’utilisateur, le fournisseur d’accès Internet de
              l’utilisateur, le système d’exploitation de l’utilisateur, ainsi
              que la date et l’heure d’accès.
            </StyledTypoText>
            <StyledTypoText>
              Les cookies ne risquent en aucun cas d’endommager le terminal de
              l’utilisateur.
            </StyledTypoText>
            <StyledTypoText>
              <StyledList> Les cookies analytiques</StyledList>
              <StyledTypoText>
                Ces cookies permettent de connaître l’utilisation et les
                performances du site et d’en améliorer le fonctionnement en
                procédant à des analyses de fréquentation des pages
                d’information, en effectuant un suivi des taux d’ouverture,
                des taux de clics et des taux de rebond au niveau individuel.
              </StyledTypoText>
              <StyledList>
                Les cookies nécessaires à la navigation sur le site
              </StyledList>
              <StyledTypoText>
                Ces cookies sont nécessaires au fonctionnement du site web.
                Ils permettent l’utilisation des principales fonctionnalités
                du site web. Sans ces cookies, les internautes ne peuvent
                jouir d’une expérience totale sur le site web.
              </StyledTypoText>
              <StyledList> Les cookies fonctionnels</StyledList>
              <StyledTypoText>
                Ces cookies permettent de personnaliser l’expérience de
                l’internaute.
              </StyledTypoText>
              <StyledTypoText>
                Le site
                {' '}
                <a>https://www.byludivine.com</a>
                {' '}
                n'utilise aucun
                cookies.
              </StyledTypoText>
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
              L'éditrice'a pris toutes précautions utiles pour préserver la
              sécurité des données à caractère personnel et, notamment,
              empêcher qu’elles soient déformées ou endommagées ou que des
              tiers non autorisés y aient accès.
            </StyledTypoText>
            <StyledTypoText>
              Ces mesures sont notamment les suivantes :
            </StyledTypoText>
            <List>
              <ListItem>
                <StyledTypoList>
                  - Mise en place d'un certificat de sécurtié pour chiffer les
                  données communiquées sur le site
                  {' '}
                  <a>https://www.byludivine.com</a>
                </StyledTypoList>
              </ListItem>
              <ListItem>
                <StyledTypoList>
                  - Hébergement en France protégeant contre le Cloud Act
                  Américain
                </StyledTypoList>
              </ListItem>
              <ListItem>
                <StyledTypoList>
                  - Sauvegarde des informations stockées
                </StyledTypoList>
              </ListItem>
            </List>
            {/* <ul>
                <li>
                  Mise en place d'un certificat de sécurtié pour chiffer les
                  données communiquées sur le site{' '}
                  <a>https://www.byludivine.com</a>
                </li>
                <li></li>
                <li></li>
              </ul> */}
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
              Tout litige en relation avec l’utilisation du site est soumis au
              droit français. En dehors des cas où la loi ne le permet pas, il
              est fait attribution exclusive de juridiction aux tribunaux
              compétents de Paris.
            </StyledTypoText>
          </CardContent>
        </StyledCard>
      </StyledDiv>
    </Container>
  );
}

export default LegalNotice;

// import components
import Skills from '@components/Skills';
import PortFolio from '@components/Portfolio';
import Contact from '@components/ContactBis';
import BubbleHeader from '@components/BubbleHeader';
import Container from '@components/Container';
import LinkReseau from '@components/LinkReseau';

// import image
import portraitLudivine from '@public/portrait_ludivine.png';
import image3dinvest from '@public/imagesPortFolio/application-3dinvest.png';
import imageDashboard from '@public/imagesPortFolio/dashboard_image1B.png';
import logo from '@public/logo-ByLudivine.png';
import twitter from '@public/twitter.png';
import github from '@public/github.png';
import linkedin from '@public/linkedin.png';

const Home = () => (
  <Container title="ByLudivine">
    <BubbleHeader logo={logo} portraitLudivine={portraitLudivine} />
    <PortFolio
      logo={logo}
      image3dinvest={image3dinvest}
      imageDashboard={imageDashboard}
    />
    <Skills />
    <LinkReseau
      imageTwitter={twitter}
      imageGithub={github}
      imageLinkedin={linkedin}
    />
    <Contact />
  </Container>
);
export default Home;

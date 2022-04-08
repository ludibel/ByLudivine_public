// import react/next
import Head from 'next/head';

// import components
import Skills from '../src/components/Skills';
import PortFolio from '../src/components/Portfolio';
import Contact from '../src/components/ContactBis';
import BubbleHeader from '../src/components/BubbleHeader';
import Container from '../src/components/Container';

// import image
import portraitLudivine from '../public/portrait_ludivine.png';
import image3dinvest from '../public/imagesPortFolio/application-3dinvest.png';
import imageDashboard from '../public/imagesPortFolio/dashboard_image1B.png';
import logo from '../public/logo-ByLudivine.png';

export default function Home() {
  return (
    <Container title="ByLudivine">
      <BubbleHeader logo={logo} portraitLudivine={portraitLudivine} />
      <PortFolio
        logo={logo}
        image3dinvest={image3dinvest}
        imageDashboard={imageDashboard}
      />
      <Skills />
      <Contact />
    </Container>
  );
}

// import react
import PropTypes from 'prop-types';
// import Emotion Style
import styled from '@emotion/styled';
// import mui
import {
  useScrollTrigger,
  Zoom,
  Fab,
  Toolbar,
} from '@mui/material';
// import mui icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// style
const StyledDiv = styled('div')({
  position: 'fixed',
  bottom: '2em',
  right: '2em',
  zIndex: 1000,
});
const StyledFab = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.palette.color.one,
  '&:hover': {
    backgroundColor: theme.palette.color.two,
  },
}));
// fait apparaitre un bouton qui permet de remonter en haut de page
const Scroll = ({
  children,
  window,
}) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 300,
  });

  const handleClick = (event) => {
    // définit la cible par rapport à l'id anchor (Toolbar)
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#anchor',
    );
    if (anchor) {
      // definit un comportement de défilement vers le haut
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Zoom in={trigger}>
      <StyledDiv onClick={handleClick}>{children}</StyledDiv>
    </Zoom>
  );
};

Scroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const ScrollTop = () => (
  <>
    <Toolbar id="anchor" />
    <Scroll>
      <StyledFab size="small">
        <KeyboardArrowUpIcon />
      </StyledFab>
    </Scroll>
  </>
);
export default ScrollTop;

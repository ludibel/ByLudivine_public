// import react / next
import React from 'react';
import PropTypes from 'prop-types';
// import mui
import Fade from '@mui/material/Fade';
// useScroolTrigger permet de déclencher l'évènement lorsque l'on est sur le composant
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ScrollToFade = ({
  window,
  threshold,
  timeout,
  children,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold,
    target: window ? window() : undefined,
    timeout,
  });

  return (
    <Fade
      appear
      in={trigger}
      timeout={timeout}
    >
      {children}
    </Fade>
  );
};

ScrollToFade.propTypes = {
  threshold: PropTypes.number,
  window: PropTypes.func,
  timeout: PropTypes.number,
  children: PropTypes.element.isRequired,
};
export default ScrollToFade;

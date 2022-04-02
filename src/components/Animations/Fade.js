// import react / next
import React from 'react'
import PropTypes from 'prop-types'
// import mui
import Fade from '@mui/material/Fade'
// useScroolTrigger permet de déclencher l'évènement lorsque l'on est sur le composant
import useScrollTrigger from '@mui/material/useScrollTrigger'

const ScrollToFade = ({ window, threshold, direction, timeout, children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: window ? window() : undefined,
    direction: direction,
    timeout: timeout,
  })

  return (
    <Fade appear={true} in={trigger}>
      {children}
    </Fade>
  )
}

ScrollToFade.propTypes = {
  threshold: PropTypes.number,
  window: PropTypes.func,
  direction: PropTypes.string,
  timeout: PropTypes.number,
  children: PropTypes.element.isRequired,
}
export default ScrollToFade

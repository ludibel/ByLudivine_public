// import react / next
import React from 'react'
import PropTypes from 'prop-types'
// import mui
import Slide from '@mui/material/Slide'
// useScroolTrigger permet de déclencher l'évènement lorsque l'on est sur le composant
import useScrollTrigger from '@mui/material/useScrollTrigger'

const ScrollToSlide = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window() : undefined,
  })

  return (
    <Slide
      appear={true}
      direction={props.direction}
      in={trigger}
      timeout={props.timeout}
    >
      {props.children}
    </Slide>
  )
}
ScrollToSlide.propTypes = {
  threshold: PropTypes.number,
  window: PropTypes.func,
  direction: PropTypes.string,
  timeout: PropTypes.number,
  children: PropTypes.element.isRequired,
}
export default ScrollToSlide

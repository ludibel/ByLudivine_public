// import react / next
import React from 'react'
// import Emotion style
import styled from '@emotion/styled'
// import keyframe Emotion pour animation
import { keyframes } from '@emotion/react'

const animation = keyframes`
0% {
  transform: translate(50%, 0px)

  opacity: 0;
}
25% {
  transform: translate(0%, 0%)
  opacity: 1;
}
75% {
  transform:translate(0%, 0%) 
 
  opacity: 1;
}
100% {
  opacity: 1;
}
`
// script permettant de faire apparaitre un texte lettre par lettre

const Wrapper = styled('span')({
  display: 'inline-block',
  span: {
    opacity: 0,
    animation: `${animation}`,
    animationDuration: '15s',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    display: 'inline-block',
    '&:nth-of-type(1)': { animationDelay: `0.2s` },
    '&:nth-of-type(2)': { animationDelay: `0.5s` },
    '&:nth-of-type(3)': { animationDelay: `0.8s` },
    '&:nth-of-type(4)': { animationDelay: `1.1s` },
    '&:nth-of-type(5)': { animationDelay: `1.4s` },
    '&:nth-of-type(6)': { animationDelay: `1.7s` },
    '&:nth-of-type(7)': { animationDelay: `2s` },
    '&:nth-of-type(8)': { animationDelay: `2.3s` },
    '&:nth-of-type(9)': { animationDelay: `2.6s` },
    '&:nth-of-type(10)': { animationDelay: `2.9s` },
    '&:nth-of-type(9)': { animationDelay: `3.2s` },
    '&:nth-of-type(10)': { animationDelay: `3.5s` },
    '&:nth-of-type(11)': { animationDelay: `3.8s` },
    '&:nth-of-type(12)': { animationDelay: `4.1s` },
    '&:nth-of-type(13)': { animationDelay: `4.4s` },
    '&:nth-of-type(14)': { animationDelay: `4.7s` },
    '&:nth-of-type(15)': { animationDelay: `5s` },
    '&:nth-of-type(16)': { animationDelay: `5.3s` },
    '&:nth-of-type(17)': { animationDelay: `5.6s` },
    '&:nth-of-type(18)': { animationDelay: `5.9s` },
    '&:nth-of-type(19)': { animationDelay: `6.1s` },
    '&:nth-of-type(20)': { animationDelay: `6.4s` },
    '&:nth-of-type(21)': { animationDelay: `6.7s` },
    '&:nth-of-type(22)': { animationDelay: `7s` },
    '&:nth-of-type(23)': { animationDelay: `7.3s` },
    '&:nth-of-type(24)': { animationDelay: `7.6s` },
    '&:nth-of-type(25)': { animationDelay: `7.9s` },
  },
})
const TextAnimation = ({ text, textBis }) => {
  const reactArray = `${text}`.split('')
  const textArray = `${textBis}`.split('')
  return (
    <>
      <Wrapper>
        {reactArray.map((item, index) =>
          item === ' ' ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <span key={index}>{item}</span>
          )
        )}
        <br />
        {textArray.map((item, index) =>
          item === ' ' ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <span key={index}>{item}</span>
          )
        )}
      </Wrapper>
    </>
  )
}

TextAnimation.propTypes = {}
export default TextAnimation

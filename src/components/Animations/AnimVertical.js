// import keyframes Emotion
import { keyframes } from '@emotion/react'
// animation verticale
const animateVertical = keyframes`
0%,
  100% {
    transform: translateY(0);
  }

  10%,
  30%,
  50%,
  70% {
    transform: translateY(-8px);
  }

  20%,
  40%,
  60% {
    transform: translateY(8px);
  }

  80% {
    transform: translateY(6.4px);
  }

  90% {
    transform: translateY(-6.4px);
  }
`

export default animateVertical

// import keyframes Emotion
import { keyframes } from '@emotion/react'
// animation Horizontale
const animateHorizontal = keyframes`
0%,
  100% {
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70% {
    transform: translateX(-8px);
  }

  20%,
  40%,
  60% {
    transform: translateX(8px);
  }

  80% {
    transform: translateX(6.4px);
  }

  90% {
    transform: translateX(-6.4px);
  }
`
export default animateHorizontal

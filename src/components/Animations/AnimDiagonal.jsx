// import Emotion keyframe
import { keyframes } from '@emotion/react';
// animation en diagonale
const animateDiagonal = keyframes`
0%,
  100% {
    transform: translate(0,0);
  }

  10%,
  30%,
  50%,
  70% {
    transform: translate(-12px,-12px);
  }

  20%,
  40%,
  60% {
    transform: translate(12px,12px);
  }

  80% {
    transform: translate(7px,7px);
  }

  90% {
    transform: translate(-7px,-7px);
  }
`;

export default animateDiagonal;

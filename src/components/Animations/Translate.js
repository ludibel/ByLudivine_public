// import keyframes Emotion
import { keyframes } from '@emotion/react';
// animation translate X,Y
const translate = keyframes`
  0% {
    transform: translate(-5%,0%);
  }
  20% {
    transform: translate(5%, 10%);
  }
  20% {
    transform: translate(20%, 15%);
  }
  40% {
    transform: translate(40%,25%);
  }
  50% {
    transform: translate(50%,25%);
  }
  60% {
    transform: translate(60%,25%);
  }
  70% {
    transform: translate(70%,20%);
  }
  80% {
    transform: translate(80%, 20%);
  }
  90% {
    transform: translate(90%, 15%);
  }
  100% {
    transform: translate(100%, 15%);
    left: 70%
  }
`;
export default translate;

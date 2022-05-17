// import keyframes Emotion
import { keyframes } from '@emotion/react';
// animation morph
const morph1 = keyframes`
0%,
100% {
  border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
}

10% {
  border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
}

20% {
  border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
}

30% {
  border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
}

40% {
  border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
}

50% {
  border-radius: 100%;
}

60% {
  border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
}

70% {
  border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
}

80% {
  border-radius: 40% 60% 53% 47% / 26% 69% 31% 74%;
}

90% {
  border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
}
`;
export const morph2 = keyframes`
0%,
100% {
  border-radius: 70% 30% 30% 70% / 52% 30% 70% 48%;
}

10% {
  border-radius: 65% 25% 39% 51% / 52% 48% 52% 48%;
}

20% {
  border-radius:  68% 32% 39% 61% / 83% 30% 70% 17% ;
}

30% {
  border-radius: 47% 53% 68% 32% / 62% 51% 49% 38% ;
}

40% {
  border-radius: 47% 53% 51% 49% / 62% 51% 49% 38% ;
}

50% {
  border-radius: 100%;
}

60% {
  border-radius:  50% 50% 50% 50% / 61% 30% 70% 39% ;
}

70% {
  border-radius:  32% 68% 33% 67% / 52% 54% 46% 48%  ;
}

80% {
  border-radius:  19% 81% 33% 67% / 66% 68% 32% 34% ;
}

90% {
  border-radius:  80% 20% 80% 20% / 80% 20% 80% 20%;
}
`;
export const morph3 = keyframes`
0%,
100% {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

10% {
  border-radius: 70% 30% 46% 54% / 77% 30% 70% 23%;
}

20% {
  border-radius:  48% 52% 46% 54% / 77% 30% 70% 23% ;
}

30% {
  border-radius: 48% 52% 67% 33% / 77% 41% 59% 23% ;
}

40% {
  border-radius: 48% 52% 67% 33% / 67% 41% 59% 33%  ;
}

50% {
  border-radius: 100%;
}

60% {
  border-radius:  48% 52% 67% 33% / 67% 41% 59% 33%  ;
}

70% {
  border-radius:  48% 52% 67% 33% / 44% 26% 74% 56% ;
}

80% {
  border-radius:  59% 41% 67% 33% / 28% 26% 74% 72%;
}

90% {
  border-radius:  59% 41% 44% 56% / 28% 58% 42% 72% ;
}
`;
export default morph1;

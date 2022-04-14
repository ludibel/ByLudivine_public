// import Emotion style
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
// import material ui
import { Typography } from '@mui/material';

const animateSlide = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;
const StyledDiv = styled('div')({
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
});
const StyledTypoTitleAnim = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.one,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '4em',
  '@media (min-width: 768px)': {
    fontSize: '6em',
  },
  '@media (min-width: 1024px)': {
    fontSize: '7em',
  },
  '@media (min-width: 2540px)': {
    fontSize: '8em',
  },
  whiteSpace: 'nowrap',
  animation: `${animateSlide} 10s linear infinite`,
  '& span': {
    '&:nth-of-type(1)': { color: theme.palette.color.three },
    '&:nth-of-type(2)': { color: theme.palette.color.one },
    '&:nth-of-type(3)': { color: theme.palette.color.three },
    '&:nth-of-type(4)': { color: theme.palette.color.three },
    '&:nth-of-type(5)': { color: theme.palette.color.one },
    '&:nth-of-type(6)': { color: theme.palette.color.three },
    '&:nth-of-type(7)': { color: theme.palette.color.one },
    '&:nth-of-type(8)': { color: theme.palette.color.three },
    '&:nth-of-type(9)': { color: theme.palette.color.three },
    '&:nth-of-type(10)': { color: theme.palette.color.one },
  },
}));
const TextTranslateInfinite = () => (
  // slide
  <StyledDiv id="title">
    <StyledTypoTitleAnim>
      <span>- Applications&nbsp;</span>
      <span>Web&nbsp;</span>
      <span>-&nbsp;</span>
      <span>sites&nbsp;</span>
      <span>Internet&nbsp;</span>
      <span>- Applications&nbsp;</span>
      <span>Web&nbsp;</span>
      <span>-&nbsp;</span>
      <span>sites&nbsp;</span>
      <span>Internet&nbsp;</span>
    </StyledTypoTitleAnim>
  </StyledDiv>
);

export default TextTranslateInfinite;

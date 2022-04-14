// import externe
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// import mui icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// style
const StyledDiv = styled('div')({
  '& svg': {
    cursor: 'pointer',
  },
  '@media (max-width: 600px)': {
    '& .MuiSvgIcon-fontSizeMedium': {
      fontSize: '1em',
    },
  },
  '@media (min-width: 1024px)': {
    '& .MuiSvgIcon-fontSizeMedium': {
      fontSize: '2em',
    },
  },
  '@media (min-width: 1440px)': {
    '& .MuiSvgIcon-fontSizeMedium': {
      fontSize: '3em',
    },
  },
});

const Arrow = ({ direction, onClick }) => {
  const icon = direction === 'left' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
  return <StyledDiv onClick={onClick}>{icon}</StyledDiv>;
};
Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Arrow;

// import react / next
import PropTypes from 'prop-types'
// import Emotion Style
import styled from '@emotion/styled'
// import mui
import { Grid, Typography } from '@mui/material'
// import interne
import bg from '../../../public/bg_bubble_bis.png'
// style
const StyledGridContainer = styled(Grid)({
  backgroundImage: `url(${bg.src})`,
  backgroundSize: 'cover',
  backgroundColor: '#F5F5F5',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  textAlign: 'center',
  padding: '0em 1em',
})
const StyledGridTitleOne = styled(Grid)({
  textAlign: 'center',
})
const StyledTypoOne = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.color.one,
  opacity: 0.25,
  paddingTop: '1em',
  fontSize: '2.8em',
  '@media(max-width: 376px)': {
    fontSize: '2.3em',
  },
  '@media(min-width: 768px)': {
    fontSize: '5em',
  },
  '@media(min-width: 1440px)': {
    fontSize: '6em',
  },
}))
const StyledTypoBis = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.color.three,
  zIndex: 1,
  transform: 'translateY(-107%)',
  fontSize: '2em',
  '@media(min-width: 768px)': {
    fontSize: '3em',
  },
  '@media(min-width: 1440px)': {
    fontSize: '4em',
  },
}))

const HeaderPage = ({ title, variant }) => {
  return (
    <StyledGridContainer
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <StyledGridTitleOne item xs={12}>
        <StyledTypoOne variant={variant}> {title}</StyledTypoOne>
      </StyledGridTitleOne>
      <Grid item xs={12}>
        <StyledTypoBis variant="body1"> {title}</StyledTypoBis>
      </Grid>
    </StyledGridContainer>
  )
}

HeaderPage.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}
export default HeaderPage

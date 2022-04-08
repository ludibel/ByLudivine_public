// import next
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
// import emotion style
import styled from '@emotion/styled';
// import mui
import { Grid, Typography } from '@mui/material';
// import mui icons
import CopyrightIcon from '@mui/icons-material/Copyright';

// style
const StyledGridContainer = styled(Grid)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  backgroundColor: theme.palette.color.three,
  borderTop: `2px solid ${theme.palette.color.one}`,
  boxShadow:
    '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
}));
const StyledGrid = styled(Grid)({
  textAlign: 'center',
  position: 'relative',
  bottom: '2.2em',
});
const StyledTypoOne = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '1em',
  paddingLeft: '1.5em',
  paddingRight: '1.5em',
  color: theme.palette.color.six,
  '@media (min-width: 375px)': {
    paddingLeft: '2.5em',
    paddingRight: '2.5em',
  },
  '@media (min-width: 425px)': {
    paddingLeft: '4.5em',
    paddingRight: '4.5em',
  },
  '@media (min-width: 720px)': {
    fontSize: '1.2em',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
  },
}));
const StyledTypoBis = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1em',
  color: theme.palette.color.six,
  '@media (min-width: 720px)': {
    fontSize: '1.2em',
  },
}));
const StyledGridText = styled(Grid)({
  textAlign: 'center',
  paddingTop: '0.5em',
  paddingBottom: '0.5em',
});
const StyledGridContainerBis = styled(Grid)({
  marginTop: '-3em',
  marginBottom: '1em',
});
const StyledDiv = styled('div')({
  position: 'absolute',
  bottom: 0,
  width: '100%',
});

function Footer({ logo }) {
  return (
    <StyledDiv>
      <StyledGridContainer
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <StyledGrid item xs={12}>
          <Image
            alt="logo_Byludivine"
            src={logo}
            width={70}
            height={70}
            quality={100}
          />
        </StyledGrid>
        <StyledGridContainerBis
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <StyledGridText item xs={12}>
            <StyledTypoOne>
              Copyright
              {' '}
              <CopyrightIcon />
              {' '}
              2022 - ByLudivine.com - Tous droits
              réservés
            </StyledTypoOne>
          </StyledGridText>
          <StyledGridText item xs={12}>
            <Link href="/MentionsLegales">
              <StyledTypoBis>
                <a aria-label="Accéder aux mentions légales">
                  Mentions Légales
                </a>
              </StyledTypoBis>
            </Link>
          </StyledGridText>
        </StyledGridContainerBis>
      </StyledGridContainer>
    </StyledDiv>
  );
}
Footer.propTypes = {
  logo: PropTypes.object,
};
export default Footer;

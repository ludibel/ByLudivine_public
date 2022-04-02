// import react / next
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
// import emotion
import styled from '@emotion/styled'
// import mui
import { Grid, CardContent, Typography, Card, Divider } from '@mui/material'

// style
const ItemCard = styled(Card)(({ theme }) => ({
  padding: '0.5em',
  textAlign: 'center',
  color: theme.palette.color.three,
  backgroundColor: theme.palette.color.seven,
  borderRadius: 15,
  height: '100%',
}))
const StyledTypoTitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: '700',
  color: theme.palette.color.one,
  textAlign: 'center',
  '& span': {
    color: theme.palette.color.three,
  },
  fontSize: theme.typography.portfoliotitle.fontSize,
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.color.three,
}))
const StyledGridLogo = styled(Grid)({
  paddingLeft: 3,
  '@media (min-width:1024px)': {
    marginTop: '1em',
    marginBottom: '1em',
  },
})
const StyledCardContentLogo = styled(CardContent)(({ theme }) => ({
  paddingLeft: 8,
  paddingRight: 8,
  textAlign: 'center',
  '@media (min-width:700px)': {
    fontSize: theme.typography.portfoliotext.fontSize,
  },
  fontSize: theme.typography.portfoliotextSmall.fontSize,
  fontFamily: theme.typography.fontFamily,
}))
const StyledGridTitleLogo = styled(Grid)({
  textAlign: 'left',
  paddingLeft: '0.2em',
})
const StyledCardContentTitle = styled(CardContent)({
  padding: '16px 0',
})

const CardTechno = ({ listLogo }) => {
  return (
    <>
      <ItemCard elevation={0}>
        <StyledCardContentTitle>
          <StyledTypoTitle variant="h2" component="h2">
            Technos <span> utilisées </span>
          </StyledTypoTitle>
        </StyledCardContentTitle>
        <StyledDivider />
        <StyledCardContentLogo>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            spacing={1}
          >
            {listLogo.map((logo) => {
              return (
                <StyledGridLogo
                  item
                  xs={6}
                  sm={4}
                  key={`dashboard ${logo.title}`}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item xs={4}>
                      <Image src={logo.src} quality={100} alt={logo.alt} />
                    </Grid>
                    <StyledGridTitleLogo item xs={8}>
                      <Typography variant="body">{logo.title}</Typography>
                    </StyledGridTitleLogo>
                  </Grid>
                </StyledGridLogo>
              )
            })}
          </Grid>
        </StyledCardContentLogo>
      </ItemCard>
    </>
  )
}

CardTechno.propTypes = {
  listLogo: PropTypes.array.isRequired,
}
export default CardTechno

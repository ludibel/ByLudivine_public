// import react / next
import React from 'react'
import PropTypes from 'prop-types'
// import emotion
import styled from '@emotion/styled'
// import mui
import { CardContent, Typography, Card, Divider } from '@mui/material'
// style
const ItemCard = styled(Card)(({ theme }) => ({
  padding: '0.5em',
  textAlign: 'center',
  color: theme.palette.color.three,
  backgroundColor: theme.palette.color.seven,
  borderRadius: 15,
  height: '100%',
  padding: '16px 2px',
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
const StyledTypoContent = styled(Typography)(({ theme }) => ({
  paddingBottom: '0.5em',
  '& a': {
    color: theme.palette.color.one,
  },
  '#button': {
    textAlfin: 'center',
  },
  '@media (min-width: 2500px)': {
    paddingTop: '1em',
    paddingBottom: '1em',
  },
  fontSize: theme.typography.portfoliotext.fontSize,
  '& .MuiButton-root': {
    backgroundColor: theme.palette.color.one,
    color: '#FFF',
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.color.two,
      color: theme.palette.color.two,
    },
  },
}))
const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.color.three,
}))
const StyledCardContentTitle = styled(CardContent)({
  padding: '16px 0',
})

const CardProjet = ({ datas }) => {
  return (
    <>
      <ItemCard elevation={0}>
        <StyledCardContentTitle>
          <StyledTypoTitle variant="h2" component="h2">
            Description <span> du projet</span>
          </StyledTypoTitle>
        </StyledCardContentTitle>
        <StyledDivider />
        <CardContent>
          {datas.map((data) => {
            return (
              <StyledTypoContent key={data.key} className={data.className}>
                {data.content}
              </StyledTypoContent>
            )
          })}
        </CardContent>
      </ItemCard>
    </>
  )
}

CardProjet.propTypes = {
  datas: PropTypes.array.isRequired,
}
export default CardProjet

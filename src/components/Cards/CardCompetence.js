// import react / next
import React from 'react'
import PropTypes from 'prop-types'
// import emotion
import styled from '@emotion/styled'
// import mui
import {
  Grid,
  CardContent,
  Typography,
  Card,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
// import icons mui
import CheckBoxIcon from '@mui/icons-material/CheckBox'

// Style
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
  '@media (max-width: 499px)': {
    display: 'none',
  },
}))
const StyledTypoTitleRes = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: '700',
  color: theme.palette.color.one,
  textAlign: 'center',
  '& span': {
    color: theme.palette.color.three,
  },
  fontSize: theme.typography.portfoliotitle.fontSize,
  '@media (min-width: 500px)': {
    display: 'none',
  },
}))

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.color.three,
}))
const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  '& svg': {
    color: theme.palette.color.one,
  },
  paddingTop: 7,
}))
const StyledListItem = styled(ListItem)({
  padding: 0,
  '@media (min-width: 1440px)': {
    paddingTop: '0.5em',
  },
  '@media (min-width: 2500px)': {
    paddingTop: '2em',
  },
  alignItems: 'flex-start',
})
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontSize: theme.typography.portfoliotext.fontSize,
  },
}))
const StyledCardContentTitle = styled(CardContent)({
  padding: '16px 0',
})

const CardCompetence = ({ datas }) => {
  return (
    <>
      <ItemCard elevation={0}>
        <StyledCardContentTitle>
          <StyledTypoTitle variant="h2" component="h2">
            Compétences <span> mises en oeuvre </span>
          </StyledTypoTitle>
          <StyledTypoTitleRes variant="h2" component="h2">
            Compétences <br /> <span> mises en oeuvre </span>
          </StyledTypoTitleRes>
        </StyledCardContentTitle>
        <StyledDivider />
        <CardContent>
          <List>
            {datas.map((data) => {
              return (
                <StyledListItem key={data.key}>
                  <StyledListItemIcon>
                    <CheckBoxIcon />
                  </StyledListItemIcon>
                  <StyledListItemText primary={data.content} />
                </StyledListItem>
              )
            })}
          </List>
        </CardContent>
      </ItemCard>
    </>
  )
}

CardCompetence.propTypes = {
  datas: PropTypes.array.isRequired,
}
export default CardCompetence

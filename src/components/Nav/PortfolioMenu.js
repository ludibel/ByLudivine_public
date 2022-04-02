// import react / next
import { useState, useRef } from 'react'
import Link from 'next/link'
// import Emtion Style
import styled from '@emotion/styled'
// import mui
import { Button, Menu, MenuItem } from '@mui/material'

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.color.six,
  fontWeight: 700,
  fontSize: '1.2em',
  textTransform: 'initial',
  '@media (max-width: 768px)': {
    color: theme.palette.color.three,
  },
  '&:hover': {
    color: theme.palette.color.one,
    backgroundColor: 'transparent',
  },
}))
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.color.one,
}))

const PortfolioMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  // useRef permet d'accéder à l'element du DOM ciblé, ici le Button
  const divRef = useRef()
  const handleClick = () => {
    // ouverture du menu portFolio au point de l'élément ciblé par useRef
    setAnchorEl(divRef.current)
  }
  const handleClose = () => {
    // fermeture du menu portFolio
    setAnchorEl(null)
  }

  return (
    <>
      <StyledButton
        onClick={handleClick}
        ref={divRef}
        className="imageBis"
        aria-label="Voir mes projets"
      >
        Mes projets
      </StyledButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <StyledMenuItem onClick={handleClose} key="Menu1">
          <Link href="/MesProjets">Tous mes projets</Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose} key="Menu2">
          <Link href="/MesProjets/3dinvest">3DInvest</Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose} key="Menu3">
          <Link href="/MesProjets/Dashboard">Dashboard </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose} key="Menu4">
          <Link href="/MesProjets/ByLudivine">ByLudivine</Link>
        </StyledMenuItem>
      </Menu>
    </>
  )
}
export default PortfolioMenu

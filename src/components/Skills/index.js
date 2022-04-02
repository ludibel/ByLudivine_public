// import react/next
import { useState, useRef, useEffect } from 'react'
// import style emotion
import styled from '@emotion/styled'
//import noise améliorer le visuel (lissage) d'un image
import { Noise } from 'noisejs'
//import mui
import { Typography, Grid } from '@mui/material'
import Zoom from '@mui/material/Zoom'
// style
const StyledGridContainer = styled('div')({
  background:
    'linear-gradient(180deg,rgba(244, 244, 244, 1) 0%,rgba(255, 255, 255, 1) 100%)',
  paddingTop: '1em',
})
const StyledGridTypo = styled(Grid)({ marginBottom: '2em' })
const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
})
const StyledDivBubbles = styled('div')({
  height: '550px',
  overflow: 'hidden',
  position: 'relative',
  background: 'linear-gradient(200deg, #1E2E3E 20%, #22b99A 100%)',
})
const StyledDivBubble = styled('div')({
  backgroundColor: 'white',
  backgroundImage: `url('spritesheet_bubble_White_2.png')`,
  backgroundSize: '1076px 1076px',
  borderRadius: '50%',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1)',
  height: 152,
  marginRight: 20,
  position: 'absolute',
  transition: 'opacity ease-in-out 1s',
  width: 152,
})
const StyledTypoTitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: '200',
  color: theme.palette.color.one,
  textAlign: 'center',
  '@media (max-width: 420px)': {
    fontSize: '2.5em',
  },
  '@media (min-width: 768px)': {
    textAlign: 'left',
    paddingLeft: '0.5em',
    paddingRight: '1em',
  },
  '& span': {
    color: theme.palette.color.three,
  },
}))

// paramétres de noise
// taille du canvas
const CANVAS_WIDTH = 3000
// amplitude
const NOISE_AMOUNT = 5
// fréquence
const NOISE_SPEED = 0.004
// rapidité
const SCROLL_SPEED = 0.3
// position des bulles
const bubblesSkills = [
  {
    s: 0.4,
    x: 1134,
    y: 15,
  },
  {
    s: 0.4,
    x: 1620,
    y: 271,
  },
  {
    s: 0.4,
    x: 1761,
    y: 372,
  },
  {
    s: 0.4,
    x: 2499,
    y: 29,
  },
  {
    s: 0.6,
    x: 2754,
    y: 334,
  },
  {
    s: 0.4,
    x: 2271,
    y: 356,
  },
  {
    s: 0.4,
    x: 795,
    y: 226,
  },
  {
    s: 0.4,
    x: 276,
    y: 236,
  },
  {
    s: 0.4,
    x: 1210,
    y: 365,
  },
  {
    s: 0.4,
    x: 444,
    y: 193,
  },
  {
    s: 0.4,
    x: 2545,
    y: 387,
  },
  {
    s: 0.6,
    x: 1303,
    y: 173,
  },
  {
    s: 0.6,
    x: 907,
    y: 68,
  },
  {
    s: 0.6,
    x: 633,
    y: 320,
  },
  {
    s: 0.6,
    x: 323,
    y: 40,
  },
  {
    s: 0.6,
    x: 129,
    y: 357,
  },
  {
    s: 0.6,
    x: 1440,
    y: 342,
  },
  {
    s: 0.6,
    x: 1929,
    y: 293,
  },
  {
    s: 0.6,
    x: 2135,
    y: 198,
  },
  {
    s: 0.6,
    x: 2276,
    y: 82,
  },
  {
    s: 0.6,
    x: 2654,
    y: 162,
  },
  {
    s: 0.6,
    x: 2883,
    y: 60,
  },
  {
    s: 0.7,
    x: 1519,
    y: 68,
  },
  {
    s: 0.7,
    x: 1071,
    y: 233,
  },
  {
    s: 0.7,
    x: 1773,
    y: 128,
  },
  {
    s: 0.7,
    x: 2098,
    y: 385,
  },
  {
    s: 0.7,
    x: 2423,
    y: 244,
  },
  {
    s: 0.7,
    x: 901,
    y: 365,
  },
  {
    s: 0.7,
    x: 624,
    y: 91,
  },
  {
    s: 0.7,
    x: 35,
    y: 103,
  },
  {
    s: 0.7,
    x: 413,
    y: 367,
  },
  {
    s: 0.7,
    x: 2995,
    y: 271,
  },
  {
    s: 0.7,
    x: 1990,
    y: 25,
  },
]

const backgroundPositions = []

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    backgroundPositions.push(`${-154 * j}px ${-154 * i}px`)
  }
}

const noise = new Noise()

const Skills = () => {
  const animationRef = useRef()
  const bubblesRef = useRef(
    bubblesSkills.map((bubble) => ({
      ...bubble,
      noiseSeedX: Math.floor(Math.random() * 64000),
      noiseSeedY: Math.floor(Math.random() * 64000),
      xWithNoise: bubble.x,
      yWithNoise: bubble.y,
    }))
  )

  const [isReady, setReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 200)

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  function animate() {
    bubblesRef.current = bubblesRef.current.map((bubble, index) => {
      const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED
      const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED

      const randomX = noise.simplex2(newNoiseSeedX, 0)
      const randomY = noise.simplex2(newNoiseSeedY, 0)

      const newX = bubble.x - SCROLL_SPEED

      const newXWithNoise = newX + randomX * NOISE_AMOUNT
      const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT

      const element = document.getElementById(`bubble-${index}`)

      if (element) {
        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`
      }

      return {
        ...bubble,
        noiseSeedX: newNoiseSeedX,
        noiseSeedY: newNoiseSeedY,
        x: newX < -200 ? CANVAS_WIDTH : newX,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      }
    })

    animationRef.current = requestAnimationFrame(animate)
  }
  return (
    <StyledGridContainer
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      id="Technos"
    >
      <StyledGridTypo item xs={12}>
        <Zoom in={true} timeout={3000}>
          <StyledTypoTitle variant="h3">
            Technologies <span>Utilisées</span>
          </StyledTypoTitle>
        </Zoom>
      </StyledGridTypo>
      <Grid item xs={12}>
        <StyledDiv>
          <StyledDivBubbles>
            {bubblesSkills.map((bubble, index) => (
              <StyledDivBubble
                id={`bubble-${index}`}
                key={`${bubble.x} ${bubble.y}`}
                style={{
                  backgroundPosition: backgroundPositions[index],
                  transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
                }}
              />
            ))}
          </StyledDivBubbles>
        </StyledDiv>
      </Grid>
    </StyledGridContainer>
  )
}

export default Skills

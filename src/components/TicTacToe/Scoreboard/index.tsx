import React from 'react'
import { IntScoreboard } from '..'

import { Container } from './styles'

interface IntProps {
  scoreboard: IntScoreboard
}

const Scoreboard = ({ scoreboard }: IntProps): React.ReactElement => {
  const { x, o, draws } = scoreboard
  return (
    <Container>
      <div>X</div>
      <div>O</div>
      <div>Draws</div>
      <div>{x}</div>
      <div>{o}</div>
      <div>{draws}</div>
    </Container>
  )
}

export default Scoreboard

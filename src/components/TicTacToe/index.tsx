import React, { useState, useEffect } from 'react'

import Scoreboard from './Scoreboard'
import { checkGameStatus } from '../../helpers/TicTacToe'

import { Board, Button, ActionContainer, RestartButton } from './styles'

export interface IntScoreboard {
  x: number
  o: number
  draws: number
}

const TicTacToe = (): React.ReactElement => {
  const [board, setBoard] = useState(() => new Array(9).fill(null))
  const [scoreboard, setScoreboard] = useState<IntScoreboard>({
    x: 0,
    o: 0,
    draws: 0,
  })
  const [playerTurn, setPlayerTurn] = useState('X')

  const togglePlayerTurn = () =>
    playerTurn === 'X' ? setPlayerTurn('O') : setPlayerTurn('X')

  const { status, winnerGame, winner } = checkGameStatus(board)

  const selectSquare = (index: number) => {
    board[index] = playerTurn
    togglePlayerTurn()
    setBoard([...board])
  }

  const restart = () => {
    setBoard(new Array(9).fill(null))
  }

  useEffect(() => {
    let toSumScore
    if (status !== 'playing') {
      if (status === 'tied') toSumScore = { draws: scoreboard.draws + 1 }
      if (winner === 'X') toSumScore = { x: scoreboard.x + 1 }
      if (winner === 'O') toSumScore = { o: scoreboard.o + 1 }

      setScoreboard({ ...scoreboard, ...toSumScore })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board])

  return (
    <div className='wrapper'>
      <Scoreboard scoreboard={scoreboard} />
      <h2>{status === 'playing' ? `${playerTurn} turn` : status}</h2>
      <Board>
        {board.map((value, index) => (
          <Button
            key={index}
            onClick={() => selectSquare(index)}
            disabled={status !== 'playing' || value}
            className={winnerGame.includes(index) ? 'winner' : ''}
          >
            {value}
          </Button>
        ))}
      </Board>
      <ActionContainer>
        {status !== 'playing' && (
          <RestartButton onClick={restart}>Restart</RestartButton>
        )}
      </ActionContainer>
    </div>
  )
}

export default TicTacToe

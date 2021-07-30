import React, { useState } from 'react'

import { checkGameStatus } from '../../helpers/TicTacToe'

import { Board, Button, ActionContainer, RestartButton } from './styles'

const TicTacToe = (): React.ReactElement => {
  const [board, setBoard] = useState(() => new Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState('X')

  const togglePlayerTurn = () =>
    playerTurn === 'X' ? setPlayerTurn('O') : setPlayerTurn('X')

  const { status, winnerGame } = checkGameStatus(board)

  const selectSquare = (index: number) => {
    board[index] = playerTurn
    togglePlayerTurn()
    setBoard([...board])
  }

  const restart = () => {
    setBoard(new Array(9).fill(null))
  }

  return (
    <div className='wrapper'>
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

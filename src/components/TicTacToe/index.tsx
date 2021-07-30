import React, { useState } from 'react'

import { checkGameStatus, Status } from '../../helpers/TicTacToe'

import { Board, Button, ActionContainer, RestartButton } from './styles'

const TicTacToe = (): React.ReactElement => {
  const [gameState, setGameState] = useState('playing')
  const [board, setBoard] = useState(() => new Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState('X')
  const [winnerPaintigEffect, setWinnerPaintigEffect] = useState<number[]>([])

  const togglePlayerTurn = () =>
    playerTurn === 'X' ? setPlayerTurn('O') : setPlayerTurn('X')

  const stateMachine = ({ status, winner, winnerGame }: Status) => {
    switch (status) {
      case 'playing':
        togglePlayerTurn()
        break
      case 'tied':
        togglePlayerTurn()
        setGameState('tied')
        break
      case 'winner':
        setWinnerPaintigEffect(winnerGame)
        setGameState(status)
        setPlayerTurn(winner === 'O' ? 'X' : 'O')
        break
      default:
        break
    }
  }

  const selectSquare = (index: number) => {
    board[index] = playerTurn

    const gameStatus = checkGameStatus(board)

    stateMachine(gameStatus)

    setBoard([...board])
  }

  const restart = () => {
    setGameState('playing')
    setWinnerPaintigEffect([])
    setBoard(new Array(9).fill(null))
  }

  return (
    <div className='wrapper'>
      <h2>{gameState === 'playing' ? `${playerTurn} turn` : gameState}</h2>
      <Board>
        {board.map((value, index) => (
          <Button
            key={index}
            onClick={() => selectSquare(index)}
            disabled={gameState !== 'playing' || value}
            className={winnerPaintigEffect.includes(index) ? 'winner' : ''}
          >
            {value}
          </Button>
        ))}
      </Board>
      <ActionContainer>
        {gameState !== 'playing' && (
          <RestartButton onClick={restart}>Restart</RestartButton>
        )}
      </ActionContainer>
    </div>
  )
}

export default TicTacToe

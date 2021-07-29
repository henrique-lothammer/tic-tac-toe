import React, { useState, useEffect } from 'react'
import { Board, Button, ActionContainer, RestartButton } from './styles'

const TicTacToe = (): React.ReactElement => {
  const [gameState, setGameState] = useState('playing')
  const [board, setBoard] = useState(() => new Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState('X')
  const [winnerPaintigEffect, setWinnerPaintigEffect] = useState<number[]>([])

  const checkGameStatus = () => {
    if (!board.includes(null)) setGameState('tie')
    const possibleGames = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    possibleGames.forEach((game) => {
      if (
        board[game[0]] !== null &&
        board[game[0]] === board[game[1]] &&
        board[game[0]] === board[game[2]]
      ) {
        setWinnerPaintigEffect([game[0], game[1], game[2]])
        setGameState(`winner ${board[game[0]]}`)
      }
    })
  }

  const togglePlayerTurn = () =>
    playerTurn === 'X' ? setPlayerTurn('O') : setPlayerTurn('X')

  const handleButton = (index: number) => {
    board[index] = playerTurn
    togglePlayerTurn()
    checkGameStatus()
    setBoard([...board])
  }

  const handleRestart = () => {
    setGameState('playing')
    setWinnerPaintigEffect([])
    setBoard(new Array(9).fill(null))
  }

  useEffect(() => {
    switch (gameState) {
      case 'winner X':
        setPlayerTurn('O')
        break
      case 'winner O':
        setPlayerTurn('X')
        break
      default:
        break
    }
  }, [gameState])

  return (
    <div className='wrapper'>
      <h2>{gameState === 'playing' ? `${playerTurn} turn` : gameState}</h2>
      <Board>
        {board.map((value, index) => (
          <Button
            key={index}
            onClick={() => handleButton(index)}
            disabled={gameState !== 'playing'}
            className={winnerPaintigEffect.includes(index) ? 'winner' : ''}
          >
            {value}
          </Button>
        ))}
      </Board>
      <ActionContainer>
        {gameState !== 'playing' && (
          <RestartButton onClick={handleRestart}>Restart</RestartButton>
        )}
      </ActionContainer>
    </div>
  )
}

export default TicTacToe

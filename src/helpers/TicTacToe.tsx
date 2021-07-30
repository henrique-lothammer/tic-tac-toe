export interface Status {
  status: string
  winner: string
  winnerGame: number[]
}

export const checkGameStatus = (board: (null | string)[]): Status => {
  const status: Status = { status: '', winner: '', winnerGame: [] }

  if (!board.includes(null)) return { ...status, status: 'tied' }
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
      status.winnerGame = [game[0], game[1], game[2]]
      status.status = 'winner'
      status.winner = String(board[game[0]])
    }
  })
  if (status.status === 'winner') return status
  return { ...status, status: 'playing' }
}

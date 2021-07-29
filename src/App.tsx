import React from 'react'

import TicTacToe from './components/TicTacToe'
import GlobalStyle from './styles/GlobalStyle'

function App(): React.ReactElement {
  return (
    <>
      <TicTacToe />
      <GlobalStyle />
    </>
  )
}

export default App

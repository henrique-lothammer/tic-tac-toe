import styled from 'styled-components'

export const Board = styled.ul`
  width: 310px;
  height: 310px;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 2.5px;

  border: 2.5px solid #000;
  background: #000;
`

export const Button = styled.button`
  width: 100px;
  height: 100px;
  font-size: 7rem;
  background: #fff;
  color: #000;
  border-color: #7676764d;

  &:disabled {
    background: #fff;
    color: #111;
    border-color: #7676764d;
  }

  &.winner {
    color: #0261ce;
  }
`
export const ActionContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RestartButton = styled.button`
  color: #fff;
  background: #0261ce;
  padding: 10px 20px;
  border: none;
`

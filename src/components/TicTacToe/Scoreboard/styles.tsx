import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 310px;
  height: 90px;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 2.5px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 2rem;
  }
`

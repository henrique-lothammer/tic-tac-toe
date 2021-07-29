import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    html{
        font-size: 62.5%;
    }
    body{
        background: #f5f5f5;
        color: #000;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        min-width: 360px;
    }

    button{
      cursor:pointer;

      &:disabled{
        cursor:not-allowed;
      }
    }

    .wrapper{
      width: 900px;
      min-height: 100vh;
      margin:auto;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
`

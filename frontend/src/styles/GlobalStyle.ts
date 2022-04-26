import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .full-body {
        height: 100vh;
        width: 100vw;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .content {
        height: 80%;
        width: 80%;

        display: flex;
        flex-direction: column;
        align-items: center;

        background: #ddd;
        border-radius: 1rem
    }

`
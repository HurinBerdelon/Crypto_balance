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

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: #fff;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.8);
            cursor: pointer;
        }
    }
`
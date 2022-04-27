import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --purple-200: #b59ae2;
        --purple-500: #8247e5;
        --purple-800: #2c0e5f;
        --orange-600: #ec6a3b;
        --orange-300: #e79c81;
        --gray-900: #141413;
        --gray-50: #ebebeb;
        --red-500: #b8050c;
        --blue-500: #3fa1e0;
        --white: #fff;
        --black: #000
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;;
    }

    .full-body {
        height: 100vh;
        width: 100vw;
        background: var(--gray-900);
        
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

        background: var(--gray-50);
        border-radius: 0.5rem;
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
        background: var(--gray-50);
        padding: 3rem;
        position: relative;
        border-radius: 0.5rem;
    }

    .react-modal-close {
        color: var(--purple-800);
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
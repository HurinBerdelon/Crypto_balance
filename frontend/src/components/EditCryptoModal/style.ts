import styled from "styled-components";

export const Container = styled.form`

    h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        color: var(--purple-800);
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: none;
        background: var(--white);
        color: var(--purple-800);

        font-weight: 400;
        font-size: 1rem;

        &:disabled {
            filter: brightness(.95)
        }

        &::placeholder{
            color: var(--purple-200);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--orange-600);
        color: var(--white);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: 0.2s;

        &:hover{
            filter: brightness(1.2);
            cursor: pointer;
        }
    }

    .errorMessage {
        color: #f00;
    }
`
import styled from 'styled-components'

export const Container = styled.form`
    height: 15%;
    width: 100%;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: var(--purple-800);
        
    .inputField {
        height: 100%;
        width: 30%;
            
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        select, input, button {
            height: 50%;
            width: 80%;
            border-radius: 0.25rem;
            text-align: center;
            font-size: 1.25rem;
            background: var(--white);
            border: none;
            color: var(--purple-800);
        }

        button {
            margin-top: 1.25rem;
            font-size: 1.25rem;
            font-weight: bold;
            background: var(--orange-600);
            color: var(--white);

            &:hover {
                filter: brightness(1.2);
                cursor: pointer;
            }
        }

        .errorMessage {
            position: absolute;
            bottom: -1.0rem;
            color: var(--red-500);
        }
    }   
`
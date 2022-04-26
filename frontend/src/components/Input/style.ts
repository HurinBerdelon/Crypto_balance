import styled from 'styled-components'

export const Container = styled.form`
    height: 15%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
        
    div {
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
            background: #EEE;
            border: none;
        }

        button {
            margin-top: 1.25rem;
            font-size: 1.25rem;
            font-weight: bold;

            &:hover {
                filter: brightness(1.2);
                cursor: pointer;
            }
                
        }
    }   
`
import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 65%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--purple-800);

    table {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        tbody {
            color: var(--purple-500)
        }

        tr {
            display: flex;
            justify-content: flex-start;
            font-size: 1.25rem;

            border-bottom: dashed 1px;

            .token {
                width: 25%;
                text-align: start;
            }


            .amount {
                width: 25%;
                text-align: left;
            }

            .amount_in_usd {
                width: 40%;
                text-align: left;
            }

            .edit {
                width: 5%;
            }

            .delete {
                width: 5%;
            }
            
            button {
                cursor: pointer;
                border: none;
                background: var(--background);

                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    filter: brightness(0.5)
                }

                svg {
                    width: 1.25rem;
                    height: 1.25rem;
                }
            }

            .edit button{
                color: var(--purple-500);
            }
            
            .delete button{
                color: var(--red-500);
            }
        }
    }
`
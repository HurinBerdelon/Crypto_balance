import { useState } from "react";
import { useCrypto } from "../../hooks/useCrypto";
import { Container } from "./style";

export function Input(): JSX.Element {

    const { createCrypto, tokensList } = useCrypto()

    const [amount, setAmount] = useState(0)
    const [name, setName] = useState('')
    const [token, setToken] = useState('Select a Token')

    function resetForm() {
        setAmount(0)
        setName('')
        setToken('Select a Token')
    }

    async function handleSubmitCrypto(event) {
        event.preventDefault()

        console.log(amount, token)

        await createCrypto({
            amount, name, token
        })

        resetForm()
    }

    return (
        <Container
            onSubmit={handleSubmitCrypto}
        >
            <div>
                <h3>Token</h3>
                <select
                    onChange={event => setToken(event.target.value)}
                >
                    <option disabled value=''>{token}</option>
                    {tokensList.map(token => (
                        <option key={token.id} value={token.symbol}>{token.symbol}</option>
                    ))}
                </select>
            </div>

            <div>
                <h3>Amount</h3>
                <input
                    type="number"
                    step='0.00001'
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />
            </div>

            <div>
                <button
                    type='submit'
                >
                    Add
                </button>
            </div>
        </Container>
    )
}
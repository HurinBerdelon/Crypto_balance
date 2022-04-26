import { useState } from "react";
import { useCrypto } from "../../hooks/useCrypto";
import { Container } from "./style";

export function Input(): JSX.Element {

    const { createCrypto, tokensList } = useCrypto()

    const [amount, setAmount] = useState(0)
    const [name, setName] = useState('')
    const [token, setToken] = useState('Select a Token')

    function findCryptoName(token: string) {
        const crypto = tokensList.find(crypto => crypto.symbol === token.toLowerCase())

        return crypto
    }

    async function handleSubmitCrypto(event) {
        event.preventDefault()

        await createCrypto({
            amount, name, token
        })
    }

    return (
        <Container
            onSubmit={handleSubmitCrypto}
        >
            <div>
                <h3>Token</h3>
                <select
                    onChange={event => {
                        setToken(event.target.value)
                        setName(findCryptoName(event.target.value).name)
                    }}
                >
                    <option selected disabled value=''>{token}</option>
                    {tokensList.map(token => (
                        <option key={token.id} value={token.symbol.toUpperCase()}>{token.symbol.toUpperCase()}</option>
                    ))}
                </select>
            </div>

            <div>
                <h3>Amount</h3>
                <input
                    type="number"
                    step='0.00001'
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
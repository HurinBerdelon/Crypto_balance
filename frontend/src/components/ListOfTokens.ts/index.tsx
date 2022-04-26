import { useCrypto } from "../../hooks/useCrypto";
import { Container } from "./styles";
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'


export function ListOfTokens(): JSX.Element {

    const { cryptos, getCryptoMarketUSD, deleteCrypto } = useCrypto()

    async function handleDeleteCrypto(id: string): Promise<void> {
        await deleteCrypto(id)
    }

    // async function findCryptoMarketUSD(token: string): Promise<number> {
    //     // const crypto = tokensList.find(item => item.symbol === token.toLowerCase())
    //     const crypto = await getCryptoMarketUSD(token)

    //     return crypto.


    //     // return crypto.current_price
    // }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="token">Token</th>
                        <th className="name">Name</th>
                        <th className="amount">Amount</th>
                        <th className="amount_in_usd">Amount in USD</th>
                        <th className='edit'></th>
                        <th className="delete"></th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map(crypto => (
                        <tr key={crypto.id}>
                            <td className="token">
                                {crypto.token}
                            </td>

                            <td className="name">
                                {crypto.name}
                            </td>

                            <td className="amount">
                                {crypto.amount}
                            </td>

                            <td className="amount_in_usd">
                                {
                                    new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(crypto.amount)
                                }
                            </td>

                            <td className="edit">
                                <button>
                                    <AiOutlineEdit />
                                </button>
                            </td>

                            <td className="delete">
                                <button
                                    onClick={() => handleDeleteCrypto(crypto.id)}
                                >
                                    <MdDeleteOutline />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}
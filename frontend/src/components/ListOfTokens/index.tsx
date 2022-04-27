import { useCrypto } from "../../hooks/useCrypto";
import { Container } from "./styles";
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { EditCryptoModal } from "../EditCryptoModal";
import { useEffect, useState } from "react";
import { CryptoSchema } from "../../schema/CryptoSchema";

export function ListOfTokens(): JSX.Element {

    // Modal for editing crypto Amount
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentEditCrypto, setCurrentEditCrypto] = useState<CryptoSchema>({} as CryptoSchema)

    function handleToggleModal() {
        setIsModalOpen(!isModalOpen)
    }

    // Get Cryptos from server and from CoinGecko API
    const { cryptos, tokensList, deleteCrypto } = useCrypto()

    const [cryptoWithPrice, setCryptoWithPrice] = useState<CryptoSchema[]>([])

    useEffect(() => {
        setCryptoWithPrice(cryptos.map(crypto => {
            return {
                ...crypto,
                currentPrice: findCryptoPrice(crypto.token.toLowerCase())
            }
        }))
    }, [tokensList, cryptos])

    async function handleDeleteCrypto(id: string): Promise<void> {
        await deleteCrypto(id)
    }

    function findCryptoPrice(token: string) {
        if (tokensList.length === 0) {
            return
        }

        const currentCrypto = tokensList.find(item => item.symbol === token.toLowerCase())

        return currentCrypto.current_price
    }

    return (
        <Container>
            <EditCryptoModal
                currentEditCrypto={currentEditCrypto}
                isOpen={isModalOpen}
                onRequestClose={handleToggleModal}
            />
            <table>
                <thead>
                    <tr>
                        <th className="token">Token</th>
                        <th className="amount">Amount</th>
                        <th className="amount_in_usd">Amount in USD</th>
                        <th className='edit'></th>
                        <th className="delete"></th>
                    </tr>
                </thead>
                <tbody>
                    {[...cryptoWithPrice].sort((a, b) => {
                        return b.amount - a.amount
                    }).map(crypto => (
                        <tr key={crypto.id}>
                            <td className="token">
                                {crypto.token}
                            </td>

                            <td className="amount">
                                {crypto.amount}
                            </td>

                            <td className="amount_in_usd">
                                {
                                    new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(crypto.amount * crypto.currentPrice)
                                }
                            </td>

                            <td className="edit">
                                <button
                                    type='button'
                                    onClick={() => {
                                        setCurrentEditCrypto(crypto)
                                        handleToggleModal()
                                    }}
                                >
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
                <tfoot>
                    <tr>
                        <th className="token">Total</th>
                        <th className="amount"></th>
                        <th className="amount_in_usd">
                            {
                                new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(cryptoWithPrice.reduce((acc, current) => {

                                    return acc + current.amount * current.currentPrice
                                }, 0))
                            }
                        </th>
                        <th className='edit'></th>
                        <th className="delete"></th>
                    </tr>
                </tfoot>
            </table>
        </Container>
    )
}
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CryptoSchema } from "../schema/CryptoSchema";
import { TokenListSchema } from "../schema/TokenListSchema";
import { api_coinGecko, api_server } from "../services/api";

interface CryptoProviderProps {
    children: ReactNode
}

interface RequestProps {
    name: string
    token: string
    amount: number
}

interface CryptoContextData {
    cryptos: CryptoSchema[],
    createCrypto({ amount, name, token }: RequestProps): Promise<void>
    updateCryptoAmount(id: string, amount: number): Promise<void>
    deleteCrypto(id: string): Promise<void>
    tokensList: TokenListSchema[]
}

const CryptoContext = createContext<CryptoContextData>(
    {} as CryptoContextData
)

export function CryptoProvider({ children }: CryptoProviderProps) {

    const [cryptos, setCryptos] = useState<CryptoSchema[]>([])
    const [tokensList, setTokensList] = useState<TokenListSchema[]>([])

    useEffect(() => {
        api_server.get('crypto')
            .then(response => {
                setCryptos(response.data)
            })

        api_coinGecko.get('coins/list')
            .then(response => {
                setTokensList(response.data)
            })
    }, [])

    async function createCrypto(requestProps: RequestProps): Promise<void> {

        const result = await api_server.post('crypto', {
            ...requestProps,
        })

        setCryptos([...cryptos, result.data])
    }

    async function updateCryptoAmount(id: string, amount: number): Promise<void> {

        const result = await api_server.put('crypto/update', {
            id,
            amount
        })

        const tempCryptos = [...cryptos]

        const crypto = tempCryptos.findIndex(item => item.id === id)
        tempCryptos.splice(crypto, 1)

        setCryptos([...tempCryptos, result.data])
    }

    async function deleteCrypto(id: string): Promise<void> {

        await api_server.delete(`crypto/delete/${id}`)

        const tempCryptos = [...cryptos]

        const crypto = tempCryptos.findIndex(item => item.id === id)
        tempCryptos.splice(crypto, 1)

        setCryptos(tempCryptos)
    }

    return (
        <CryptoContext.Provider value={
            { cryptos, createCrypto, updateCryptoAmount, deleteCrypto, tokensList }
        }>
            {children}
        </CryptoContext.Provider>
    )
}

export function useCrypto() {
    return useContext(CryptoContext)
}
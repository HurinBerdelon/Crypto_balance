export interface CryptoSchema {
    id: string
    name: string
    amount: number
    token: string
    currentPrice?: number
    createdAt: Date
    updatedAt: Date
}
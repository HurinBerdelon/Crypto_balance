import { Crypto, PrismaClient } from "@prisma/client";
import { ICreateCryptoDTO } from "../../DTO/ICreateCryptoDTO";
import { ICryptoRepository } from "../ICryptoRepository";

export class PrismaCryptoRepository implements ICryptoRepository {

    private repository = new PrismaClient()

    async createToken({ token, name, amount }: ICreateCryptoDTO): Promise<Crypto> {
        const crypto = await this.repository.crypto.create({
            data: {
                name,
                token,
                amount
            }
        })

        return crypto
    }

    async getAllCryptos(): Promise<Crypto[]> {
        const cryptos = await this.repository.crypto.findMany()

        return cryptos
    }

    async findByToken(token: string): Promise<Crypto> {
        const crypto = await this.repository.crypto.findUnique({
            where: {
                token
            }
        })

        return crypto
    }

    async editTokenAmount(id: string, amount: number): Promise<Crypto> {
        const crypto = await this.repository.crypto.update({
            data: {
                amount
            },
            where: {
                id
            }
        })

        return crypto
    }

    async deleteToken(id: string): Promise<void> {
        await this.repository.crypto.delete({
            where: {
                id
            }
        })
    }
}
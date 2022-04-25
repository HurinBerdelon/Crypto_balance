import { Crypto } from "@prisma/client";
import { ICreateCryptoDTO } from "../DTO/ICreateCryptoDTO";

export interface ICryptoRepository {
    createToken({ token, name, amount }: ICreateCryptoDTO): Promise<Crypto>
    getAllCryptos(): Promise<Crypto[]>
    findByToken(token: string): Promise<Crypto>
    editTokenAmount(id: string, amount: number): Promise<Crypto>
    deleteToken(id: string): Promise<void>
}
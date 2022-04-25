import { Crypto } from '@prisma/client'
import { inject, injectable } from "tsyringe";
import { ICryptoRepository } from "../../repositories/ICryptoRepository";

@injectable()
export class GetAllCryptosUseCase {

    constructor(
        @inject('CryptoRepository')
        private cryptoRepository: ICryptoRepository
    ) { }

    async execute(): Promise<Crypto[]> {

        const cryptos = await this.cryptoRepository.getAllCryptos()

        return cryptos
    }
}
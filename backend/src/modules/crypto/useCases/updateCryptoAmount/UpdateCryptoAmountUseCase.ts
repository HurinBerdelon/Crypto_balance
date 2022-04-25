import { Crypto } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICryptoRepository } from "../../repositories/ICryptoRepository";

@injectable()
export class UpdateCryptoAmountUseCase {

    constructor(
        @inject('CryptoRepository')
        private cryptoRepository: ICryptoRepository
    ) { }

    async execute(id: string, amount: number): Promise<Crypto> {

        const crypto = await this.cryptoRepository.editTokenAmount(id, amount)

        return crypto
    }
}

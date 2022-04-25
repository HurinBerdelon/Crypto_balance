import { inject, injectable } from "tsyringe";
import { ICryptoRepository } from "../../repositories/ICryptoRepository";

@injectable()
export class DeleteCryptoUseCase {

    constructor(
        @inject('CryptoRepository')
        private cryptoRepository: ICryptoRepository
    ) { }

    async execute(id: string): Promise<void> {

        await this.cryptoRepository.deleteToken(id)
    }
}
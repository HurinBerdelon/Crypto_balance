import { Crypto } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICreateCryptoDTO } from "../../DTO/ICreateCryptoDTO";
import { ICryptoRepository } from "../../repositories/ICryptoRepository";

@injectable()
export class CreateCryptoUseCase {

    constructor(
        @inject('CryptoRepository')
        private cryptoRepository: ICryptoRepository
    ) { }

    async execute({ amount, name, token }: ICreateCryptoDTO): Promise<Crypto> {

        const cryptoAlreadyExists = await this.cryptoRepository.findByToken(token)

        // If crypto doesn't exists, create it
        if (!cryptoAlreadyExists) {

            const crypto = await this.cryptoRepository.createToken({
                token,
                name,
                amount
            })

            return crypto
        }
        // If crypto exists, update its amount with the old amount + the new amount
        else {

            const crypto = await this.cryptoRepository.editTokenAmount(
                cryptoAlreadyExists.id,
                cryptoAlreadyExists.amount + amount
            )

            return crypto
        }
    }
}
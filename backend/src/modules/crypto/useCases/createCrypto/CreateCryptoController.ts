import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateCryptoDTO } from "../../DTO/ICreateCryptoDTO";
import { CreateCryptoUseCase } from "./CreateCryptoUseCase";

export class CreateCryptoController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { amount, token }: ICreateCryptoDTO = request.body

        const createCryptoUseCase = container.resolve(CreateCryptoUseCase)

        const result = await createCryptoUseCase.execute({
            amount,
            token
        })

        return response.status(201).json(result)
    }
}
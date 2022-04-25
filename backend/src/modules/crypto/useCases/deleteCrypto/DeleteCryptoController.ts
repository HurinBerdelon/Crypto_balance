import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCryptoUseCase } from "./DeleteCryptoUseCase";

export class DeleteCryptoController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.body

        const deleteCryptoUseCase = container.resolve(DeleteCryptoUseCase)

        await deleteCryptoUseCase.execute(id)

        return response.status(200).send()
    }
}
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCryptoAmountUseCase } from "./UpdateCryptoAmountUseCase";

export class UpdateCryptoAmountController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id, amount } = request.body

        const updateCryptoUseCase = container.resolve(UpdateCryptoAmountUseCase)

        const result = await updateCryptoUseCase.execute(id, amount)

        return response.json(result)
    }
}

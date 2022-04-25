import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllCryptosUseCase } from "./GetAllCryptosUseCase";

export class GetAllCryptosController {

    async handle(request: Request, response: Response): Promise<Response> {

        const getAllCryptosUseCase = container.resolve(GetAllCryptosUseCase)

        const result = await getAllCryptosUseCase.execute()

        return response.json(result)
    }
}
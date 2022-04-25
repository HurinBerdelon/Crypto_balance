import { Router } from 'express'
import { GetAllCryptosController } from '../modules/crypto/useCases/getAllCryptos/GetAllCryptosController'

export const cryptoRoutes = Router()

const getAllCryptosController = new GetAllCryptosController()

cryptoRoutes.get('', getAllCryptosController.handle)
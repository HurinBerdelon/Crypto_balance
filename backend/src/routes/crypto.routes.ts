import { Router } from 'express'
import { CreateCryptoController } from '../modules/crypto/useCases/createCrypto/CreateCryptoController'
import { GetAllCryptosController } from '../modules/crypto/useCases/getAllCryptos/GetAllCryptosController'

export const cryptoRoutes = Router()

const getAllCryptosController = new GetAllCryptosController()
const createCryptoController = new CreateCryptoController()

cryptoRoutes.get('', getAllCryptosController.handle)
cryptoRoutes.post('', createCryptoController.handle)
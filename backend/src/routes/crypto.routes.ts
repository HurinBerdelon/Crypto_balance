import { Router } from 'express'
import { CreateCryptoController } from '../modules/crypto/useCases/createCrypto/CreateCryptoController'
import { DeleteCryptoController } from '../modules/crypto/useCases/deleteCrypto/DeleteCryptoController'
import { GetAllCryptosController } from '../modules/crypto/useCases/getAllCryptos/GetAllCryptosController'

export const cryptoRoutes = Router()

const getAllCryptosController = new GetAllCryptosController()
const createCryptoController = new CreateCryptoController()
const deleteCryptoController = new DeleteCryptoController()

cryptoRoutes.get('', getAllCryptosController.handle)
cryptoRoutes.post('', createCryptoController.handle)
cryptoRoutes.delete('/delete', deleteCryptoController.handle)
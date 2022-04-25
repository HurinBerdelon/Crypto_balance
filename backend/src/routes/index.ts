import { Router } from 'express'
import { cryptoRoutes } from './crypto.routes'

export const router = Router()

router.use('/crypto', cryptoRoutes)
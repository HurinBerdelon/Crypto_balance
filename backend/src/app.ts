import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { router } from './routes'

import './container'

export const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

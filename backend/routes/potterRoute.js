import express from 'express'
import { potterList } from '../controllers/potterController.js'
const potterRouter = express.Router()

console.log("✅ potterRoute loaded")

potterRouter.get('/list',potterList)

export default potterRouter
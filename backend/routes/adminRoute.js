import express from 'express'
import { addPotter } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add-potter',upload.single('image'),addPotter)

export default adminRouter
import express from 'express'
import { addPotter, allPotters, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRoute = express.Route()

adminRoute.post('/add-potter', authAdmin, upload.single('image'), addPotter)
adminRoute.post('/login', loginAdmin)
adminRoute.post('/all-potters', authAdmin, allPotters)

export default adminRoute
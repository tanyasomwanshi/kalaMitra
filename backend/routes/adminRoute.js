import express from 'express'
import { addPotter, allPotters, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/potterController.js'

const adminRoute = express.Router()

adminRoute.post('/add-potter', authAdmin, upload.single('image'), addPotter)
adminRoute.post('/login', loginAdmin)
adminRoute.post('/all-potters', authAdmin, allPotters)
adminRoute.post('/change-availability', authAdmin, changeAvailability)

export default adminRoute
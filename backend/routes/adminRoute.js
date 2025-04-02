import express from 'express'
import { addPotter,loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/auth.Admin.js'

const adminRouter = express.Router()

adminRouter.post('/add-potter',authAdmin,upload.single('image'),addPotter)
adminRouter.post('/login',loginAdmin)

export default adminRouter
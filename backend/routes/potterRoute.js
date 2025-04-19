import express from 'express'
import { potterList, loginPotter, appointmentsPotter,appointmentComplete,appointmentCancel, potterDashboard,potterProfile,updatePotterProfile} from '../controllers/potterController.js'
import authPotter from '../middlewares/authPotter.js'
const potterRouter = express.Router()

console.log("✅ potterRoute loaded")

potterRouter.get('/list',potterList)
potterRouter.post('/login',loginPotter)
potterRouter.get('/appointments',authPotter,appointmentsPotter)
potterRouter.post('/complete-appointment',authPotter,appointmentComplete)
potterRouter.post('/cancel-appointment',authPotter,appointmentCancel)
potterRouter.get('/dashboard',authPotter,potterDashboard)
potterRouter.get('/profile',authPotter,potterProfile)
potterRouter.post('/update-profile', authPotter,updatePotterProfile)

export default potterRouter
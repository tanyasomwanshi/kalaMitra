import potterModel from "../models/potterModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"


const changeAvailability = async (req, res) => {
    try {

        const { potId } = req.body

        const potData = await potterModel.findById(potId)
        await potterModel.findByIdAndUpdate(potId, { available: !potData.available })
        res.json({ success: true, message: 'Availability Changed' })



    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}

const potterList = async (req, res) => {
    try {
        const potteryArtists = await potterModel.find({}).select(['-password', '-email'])

        res.json({ success: true, potteryArtists })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

//API for potter login
const loginPotter = async (req, res) => {
    try {
        const { email, password } = req.body
        const potter = await potterModel.findOne({ email })

        if (!potter) {
            return res.json({ success: false, message: 'Invalid Credentials' })

        }

        const isMatch = await bcrypt.compare(password, potter.password)

        if (isMatch) {

            const token = jwt.sign({ id: potter._id }, process.env.JWT_SECRET)

            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: 'Invalid Credentials' })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}

//API to get potter appointments for potter panel
const appointmentsPotter = async (req, res) => {
    try {
        const { potterId } = req.body
        const appointments = await appointmentModel.find({ potterId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

//API to mark appointment completed for potter panel
const appointmentComplete = async (req, res) => {
    try {

        const { potterId, appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.potterId === potterId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        } else {
            return res.json({ success: false, message: 'Mark Failed' })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}
//API to cancel appointment for potter panel
const appointmentCancel = async (req, res) => {
    try {

        const { potterId, appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.potterId === potterId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Appointment Cancelled' })
        } else {
            return res.json({ success: false, message: 'Cancellation Failed' })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

//API to get dashboard data for potter panel
const potterDashboard = async (req, res) => {
    try {

        const { potterId } = req.body

        const appointments = await appointmentModel.find({ potterId })

        let earnings = 0
        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }

        })

        let customers = []
        appointments.map((item) => {
            if (!customers.includes(item.userId)) {
                customers.push(item.userId)
            }

        })

        const dashData = {
            earnings,
            appointments: appointments.length,
            customers: customers.length,
            latestAppointments: appointments.reverse().slice(0, 5)
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//API to get potter profile for potter panel
const potterProfile = async (req, res) => {
    try {
        const { potterId } = req.body
        const profileData = await potterModel.findById(potterId).select('-password')
        res.json({ success: true, profileData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//API to update potter profile data from potter panel
const updatePotterProfile = async (req, res) => {
    try {
        const { potterId, fees, address, available } = req.body

        await potterModel.findByIdAndUpdate(potterId, { fees, address, available })
        res.json({ success: true, message: 'Profile Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

export {
    changeAvailability, potterList,
    loginPotter,
    appointmentsPotter,
    appointmentCancel,
    appointmentComplete,
    potterDashboard,
    potterProfile,
    updatePotterProfile
}
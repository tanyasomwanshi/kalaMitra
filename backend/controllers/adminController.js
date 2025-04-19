import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import potterModel from '../models/potterModel.js'
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js'
import userModel from '../models/userModel.js'

//API for adding potter
const addPotter = async(req,res) => {
    try {

       const{name, email, password, speciality, experience, about, fees, address} = req.body 
       const imageFile = req.file

      //checking for all data to add potter
      if(!name || !email || !password || !speciality || !experience || !about || !fees || !address)
      {
        return res.json({success:false,message:"Missing Details"})
      }

      //validating email format
      if(!validator.isEmail(email))
      {
        return res.json({success:false,message:"Please enter a valid email"})

      }

      //validating strong password
      if(password.length < 8)
        {
          return res.json({success:false,message:"Please enter a valid password"})
  
        }

        //hashing potter password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const potterData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newPotter = new potterModel(potterData)
        await newPotter.save()

        res.json({success:true, message:"Potter Added"})



    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}

//API for admin login
const loginAdmin = async(req,res) => {
    try {

        const{email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
            
        }else{
            res.json({success:false,message:"Invalid credentials"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}

//API to get all potters list for admin panel
const allPotters = async(req,res) =>{
    try {
        const potters = await potterModel.find({}).select('-password')
        res.json({success:true,potters}) 
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}

//API to get all appointments list
const appointmentsAdmin = async (req,res) => {
    try {
        const appointments = await appointmentModel.find({})
        res.json({success:true, appointments})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API for appointment cancellation
 
const appointmentCancel = async (req, res) => {
    try {
        const {  appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)


        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

        //releasing potter slot

        const { potterId, slotDate, slotTime } = appointmentData
        const potterData = await potterModel.findById(potterId)

        let slots_booked = potterData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await potterModel.findByIdAndUpdate(potterId, { slots_booked })
        res.json({ success: true, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}
//API to get dashboard data for admin panel
const adminDashboard = async (req,res) => {

    try {

        const potters = await potterModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            potters: potters.length,
            appointments: appointments.length,
            customers: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success:true,dashData})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }

}


export {addPotter,loginAdmin,allPotters,appointmentsAdmin,appointmentCancel,adminDashboard}
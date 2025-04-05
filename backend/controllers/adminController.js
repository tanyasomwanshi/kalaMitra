import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import potterModel from '../models/potterModel.js'
import jwt from 'jsonwebtoken'

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

export {addPotter,loginAdmin,allPotters}
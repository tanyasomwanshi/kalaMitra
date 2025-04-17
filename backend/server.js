import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRoute from './routes/adminRoute.js'
import potterRouter from './routes/potterRoute.js'
import userRouter from './routes/userRoute.js'
//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
//Middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/admin',adminRoute)
app.use('/api/potter',potterRouter)
app.use('/api/user',userRouter)



app.get('/',(req,res)=>{
    res.send('API WORKING  ')

})

app.listen(port, ()=> console.log("Server started",port))
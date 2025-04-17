import potterModel from "../models/potterModel.js"



const changeAvailability = async (req,res) => {
    try {

        const {potId} = req.body

        const potData = await potterModel.findById(potId)
        await potterModel.findByIdAndUpdate(potId,{available: !potData.available})
        res.json({success:true, message: 'Availability Changed'})


        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}

const potterList = async (req,res) => {
    try {
        const potteryArtists = await potterModel.find({}).select(['-password','-email'])

        res.json({success:true,potteryArtists})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}

export {changeAvailability,potterList}
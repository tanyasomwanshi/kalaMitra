//API for adding potter
const addPotter = async (req,res)=>{
    try {

        const { name,email,password,speciality,experience,about,fees,address} = req.body
        const imageFile= req.imageFile
        console.log({ name,email,password,speciality,experience,about,fees,address},imageFile);

    } catch (error) {
        
    }
}

export {addPotter}
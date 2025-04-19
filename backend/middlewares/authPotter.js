import jwt from 'jsonwebtoken'

//potter authentication middleware
const authPotter = async(req,res,next) => {
    try {
        
        const {ptoken} = req.headers
        if (!ptoken) {

            return res.json({success:false,message:'Not Authorized Login Again'})
            
        }
        const token_decode = jwt.verify(ptoken,process.env.JWT_SECRET)

        req.body = req.body || {};

        req.body.potterId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export default authPotter
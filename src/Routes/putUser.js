const putUserController = require("../Controllers/putUserController");

const putUser=async(req,res)=>{
try {
    const response=await putUserController(req.body)

      res.status(200).json(response)
} catch (error) {
    res.status(400).json(error.message)
}
}
module.exports=putUser
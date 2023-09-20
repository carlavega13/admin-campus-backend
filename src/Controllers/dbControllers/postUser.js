const {User} = require("../../db");

const postUser=async(user)=>{

try {
    console.log(typeof user.username,typeof user.password,typeof user.rol, typeof user.isSuperAdmin);
    if(typeof user.username==="string" && typeof user.password==="string"){
        const response=await User.create(user)
    
        return response
    }
} catch (error) {
    return error.message
}
}
module.exports=postUser
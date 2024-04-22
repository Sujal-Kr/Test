const userModel=require("../model/user.model")

async function getUser(req,res){
    try{
        
        const id=req.id
        console.log("user",id);
        const user=await userModel.findById(id)
        if(user){
            res.json({
                message:"User details retrieved successfully",
                data:user
            })
        }
    }catch(err){
        res.json({
            message:err.message
        })
    }
}


function updateUser(req,res){
    try{    
        const dataToUpdate=req.body
        const id=req.params.id
        const user=userModel.findByIdAndUpdate(id,dataToUpdate)
        if(user){
            res.json({
                message:"Updated Sucessfully",
                data:user
            })
        }else{
            res.json({
                message:"user not found",
            })
        }

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

function deleteUser(req,res){
    
    try{
        const id=req.params.id
        const user=userModel.findByIdAndDelete(id)
        if(user){
            res.json({
                message:"user deleted Succefully",
                data:user
            })
        }else{
            res.json({
                message:"user not found!!"
            })
        }
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
    
}

function getAllUsers(req,res){
    try{
        const users=userModel.find()
        if(users){
            res.status(200).json({
                message:"Data retrieved successfully",
                data:users
            })
        }else{
            res.json({
                message:"No users found!!!"
            })
        }
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}


module.exports={
    getUser,
    updateUser,
    getAllUsers,
    deleteUser,
}
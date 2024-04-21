const userModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
const KEY=process.env.JWT_KEY
async function signup(req, res) {
    try{
        const data=req.body
        console.log(data)
        const user=await userModel.create(data)
        if(user){
            res.json({
                message: "user signed up successfully",
                data: user
            })
        }else{
            res.json({
                message: "user not signed up",
            })
        }

    }catch(err){
        return res.status(500).json({
            message: err.message,
        })
    }
}

async function login(req, res) {
    try{
        const {email,password}=req.body
        
        const user=await userModel.findOne({email:email})
        if(user){
            if(bcrypt.compare(password,user.password)){
                let id=user._id
                let token = jwt.sign({ payload: id }, KEY)
                res.cookie('login', token, { httpOnly: true })
                res.json({
                    message: "user logged in successfully",
                    user:user
                })
            }else{
                res.json({
                    message: "Wrong credentials try again",
                })
            }
            
        }else{
            res.json({
                message: "User not found. Please register with us",
            })
        }
    }catch(err){
        res.status(500).json({message: err.message})
    }
    
}

function logout(){
    res.cookie("login",'',{maxAge:1})
    return res.json({
        message: "User logged out successfully",
    })
}

module.exports = {
    signup,
    login,
    logout
}
import mongoose from "mongoose"
import User from "../entities/user.entity.js"
import bcrypt from 'bcrypt'


export const userRegister = async(req,res)=>{

    const{
        firtName,
        lastName,
        email,
        password,
        isAdmin
    }=req.body

    const vUser =await User.findOne({email:req.body.email})
    if(vUser){
        return res.status(400).json({message:"Usuario ya existe"})
    }else{
        const sal=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,sal)

        const newUser = await User.create({
            firtName,
            lastName,
            email,
            password: hashedPassword,
            isAdmin
        })
        res.status(201).json(newUser)
    }
    }
export const loginUser =(req,res)=>{
    res.send("inicio de usuario")
}
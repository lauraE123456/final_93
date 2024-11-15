import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    firtName:{
        type: String,
        required:[true,"Nombre requerido"]
    },
    lastName:{
        type: String,
        required:[true,"Apellido requerido"]
    },
    email:{
        type: String,
        required:[true,"email requerido"],
        unique:[true,"email no debe ser repetivo"],

    },
    password:{
        type: String,
        required:[true,"Contraseña requerido"]
    },
    isAdmin:{
        type:Boolean,
        required:[true],
        default: false
    }
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema)
export default User
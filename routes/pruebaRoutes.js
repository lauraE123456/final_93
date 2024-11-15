import express from 'express'
const pruebaRouter =express.Router()

pruebaRouter.get('/saludo',(solicitud,respuesta)=>
    {respuesta.send("ficha 2902093")}
)

pruebaRouter.post('/registro',(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        "mensaje":"usuario creado correctamente",
        "datos":{
            "email":req.body.email,
            "password":req.body.password
        }
    })
})
export default pruebaRouter
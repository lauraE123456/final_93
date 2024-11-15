import pkg from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import pruebaRouter from './routes/pruebaRoutes.js';
import authRouter from './routes/authRouter.js';
import connectDB from './config/db.js';

dotenv.config(); 
connectDB()

console.log("prueba".bgBlue.underline.bgCyan)


const app =express()
app.use(express.json())
const PORT =process.env.PORT

app.use('/api/pruebas', pruebaRouter)
app.use('/api/auth', authRouter)

//SERVIDOR 
app.listen(PORT,()=>{
    console.log(`servidor ejecutando en puerto ${PORT}`.bgBlack.red.bold)
})

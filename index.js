import express from "express";
import cors from "cors";
import routeproductos from "./router/routerProducto.js";
import env from "dotenv";
import mongoose from "mongoose";

env.config();

const app = express();

const PORT = process.env.PORT ;

app.use(express.json());

app.use(cors());

app.use("/productos",routeproductos)

app.use ((req,res) => {
  
     res.status (404).json ({error: "Error 404 Ruta no Encontrada"});
 });

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Conectado a la Base de Datos Exitosa")
}).catch((error) => console.log("error de conexion a la base de datos"));


app.listen(PORT, () => {    
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});


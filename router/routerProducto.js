import express from "express";
import { getProductsController,getProductController,createProductController,updateProductController,deleteProductController}  from "../controller/controllerProducto.js";


const routeproductos = express.Router();

routeproductos.get("/",getProductsController)
routeproductos.get("/:id",getProductController)
routeproductos.post("/",createProductController)
routeproductos.put("/:id",updateProductController)
routeproductos.delete("/:id",deleteProductController)    


export default routeproductos;

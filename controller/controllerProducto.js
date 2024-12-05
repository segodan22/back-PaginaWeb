
import { getProduct,getProducts,createProduct,updateProduct,deleteProduct } from "../service/serviceProducto.js";

export const getProductsController  = async (req,res) => {

   try {
        const productos = await getProducts();    
        res.status (200).json ({status:"success",msg: "Listado de Productos",data: productos,});
       
           
       }catch (error) {
        console.log (error);
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
       }

}

export const getProductController = async (req,res) => {
    try {
        const id = req.params.id;
        const producto = await getProduct(id);
        if (!producto) {
            res.status (400).json ({status: "error",msg: "Producto no encontrado",data:{} });
       
           }else {
            res.status (200).json ({status:"success",msg: "Producto Seleccionado",data: producto,});
        }
       }catch (error) {
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
       }
} 

export const createProductController = async (req,res) => {
    try {
        const {nombre,precio} = req.body; 
        console.log (nombre,precio)
        
        if (!nombre || !precio) {
            res.status (400).json ({status: "error",msg: "Producto no encontrado",data:{} });
       
        }   
        
        const producto = await createProduct({nombre,precio});
        res.status (200).json ({status:"success",msg: "Producto Creado",data: producto,});
        }catch (error) {
            res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
    }
}

export const updateProductController = (req,res) => {
    try {
        const {nombre,precio} = req.body;
        const id = req.params.id;
        
        if (!nombre && !precio) {  
           
            res.status (400).json ({status: "error",msg: "Producto no encontrado",data:{} });
                
            const producto = updateProduct({id,nombre,precio});
      
           if (producto==-1) {
            res.status (400).json ({status: "error",msg: "Producto no encontrado",data:{} });
           }else {
            res.status (200).json ({status:"success",msg: "Producto Actualizado",data: producto,});
           }
         }      
        }    
        
       catch (error) 
       {
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
    
       }
      
   
}

export const deleteProductController = (req,res) => {
    try {
        const id = req.params.id;
        const producto = deleteProduct(id);
        if (!producto) {
            res.status (400).json ({status: "error",msg: "Producto no encontrado",data:{} });
           }else {
            res.status (200).json ({status:"success",msg: "Producto Eliminado",data: producto,});
        }
       }catch (error) {
        res.status (500).json ({status: "error",msg: "Error en el Servidor",data:{} });
    
       }


}
import crypto from "crypto"
import Producto from "../model/modelProducto.js"


export const getProducts = async () => {
    const producto = await Producto.find();
    return producto
}

export const getProduct = async (id) => {
    const producto = await Producto.find({id:id});
    return producto;
    }


    export const createProduct = async ({nombre,precio}) => {
        const producto = {
            id: crypto.randomUUID(),
            nombre: nombre ,
            precio: precio ,
            ishabilitado : true
        }
        const producto1 = await Producto.create(producto);
            return producto1;
        
    }

    export const updateProduct = async(id,nombre,precio) =>  {

        const productoActualizado = await Producto.findOneAndUpdate({id},{nombre,precio})
         return productoActualizado
         }
        
       

    export const deleteProduct = async (id) => {

        const productoBorrado = await Producto.findOneAndUpdate({id},{ishabilitado:false})
        return productoBorrado
        
     }
        

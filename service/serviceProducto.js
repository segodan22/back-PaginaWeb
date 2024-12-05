import crypto from "crypto"
import Producto from "../model/modelProducto.js"


export const getProducts = async () => {
    const productos = await Producto.find();
    return productos
}

export const getProduct = async (id) => {
    const producto = await Producto.find (producto => producto.id == id);
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
        //productos.push(producto);
        return producto1;
        
    }

    export const updateProduct = () => {

        const producto = this.getProduct(id);
        if (!producto){
            return -1
        }else {
            producto.nombre = nombre;
            producto.precio = precio;
            return producto 
        }
    }

    export const deleteProduct = () => {

        const producto = this.getProduct(id);
        
        if (!producto) {
            return -1
        } else {
            producto.ishabilitado = false;
        }
        return producto
    }

import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    //descripcion: { type: String, required: true },
    //proveedor: {type:Schema.Types.ObjectId, ref: "Proveedor",required:true},	
    //contenido: { type: String, required: true },
    precio: { type: Number, required: true,default:100 },
    ishabilitado: { type: Boolean, required: true },
});

const Producto = mongoose.model("Producto", productoSchema);
export default Producto

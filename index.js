import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

let productos = [{
    id: 1,
    nombre: "producto 1",
    precio: 100 ,
    ishabilitado : true

},
{
    id: 2,
    nombre: "producto 2",
    precio: 200 ,
    ishabilitado : true

},
{
    id: 3,
    nombre: "producto 3",
    precio: 300 ,
    ishabilitado : true

},
{
    id: 4,
    nombre: "producto 4",
    precio: 300 ,
    ishabilitado : false

}
]


app.get ("/productos", (req,res) => {
   try {
    res.status (200).json (productos);   
   }catch (error) {
    res.status (500).json ({error: "Error en el Servidor"});
   }

})

app.get ("/productos/:id", (req,res) => {
    try {
     const id = req.params.id;
     const producto = productos.find (producto => producto.id == id);
     if (!producto) {
         res.status (400).json ({error: "Producto no encontrado"});
        }else {
         res.status (200).json (producto);
     }
    }catch (error) {
         res.status (500).json ({error: "Error en el Servidor"});
    }
 
 })

  app.post ("/productos", (req,res) => {
    try {
    const {nombre,precio} = req.body; 
    
    if (!nombre || !precio) {
        res.status (400).json ({error: "Faltan Datos"});
    }   
    
    const producto = {
        id: productos.length + 1,
        nombre:nombre,
        precio:precio,
        ishabilitado : true
    }
    productos.push(producto);
    res.status (200).json (producto);
    }catch (error) {
        res.status (500).json ({error: "Error en el Servidor"});
}
 
 })

 app.put ("/productos/:id", (req,res) => {
    try {
     const {nombre,precio} = req.body;
     const id = req.params.id;
     const producto = productos.find (producto => producto.id == id);
     if (!nombre && !precio) {  
         res.status (400).json ({error: "Faltan Datos"});
        } else if (!nombre) {
            if (!producto) {    
                res.status (400).json ({error: "Producto no encontrado"});
        } else {
            producto.precio = precio;
            res.status (200).json (producto);
        } 
       } else if (!precio) {
            if (!producto) {    
                res.status (400).json ({error: "Producto no encontrado"});    
            } else {
                producto.nombre = nombre;
                res.status (200).json (producto);       
            }
       }  else {
        if (!producto) {
            res.status (400).json ({error: "Producto no encontrado"});
        }else {
            producto.nombre = nombre;
        producto.precio = precio;
        res.status (200).json (producto);
        }

        
       }      
     }    
     
    catch (error) 
    {
         res.status (500).json ({error: "Error en el Servidor"});
    }
   
});

app.delete ("/productos/:id", (req,res) => {
    try {
     const id = req.params.id;
     const producto = productos.find (producto => producto.id == id);
     if (!producto) {
         res.status (400).json ({error: "Producto no encontrado"});
        }else {
         producto.ishabilitado = false;
         res.status (200).json (producto);
     }
    }catch (error) {
         res.status (500).json ({error: "Error en el Servidor"});
    }
 
 })
 app.delete ("/productos/definitivo/:id", (req,res) => {
    try {
     const id = req.params.id;
     productos = productos.filter((producto) => producto.id != id);
     console.log(productos.filter((producto) => producto.id != id));
     res.status (200).json (productos);
     
    }catch (error) {
         res.status (500).json ({error: "Error en el Servidor"});
    }
 
 })


app.use ((req,res) => {
  
     res.status (404).json ({error: "Error 404 Ruta no Encontrada"});
 });


app.listen(PORT, () => {    
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});


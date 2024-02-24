const express=require("express");
const app =express();
const port=4000;
const path= require('path');
const rutas= require('./routes/rutas');
const bd= require('./config/conexionDB.js');

bd.authenticate()
 .then(()=>{
        console.log('Conexion exitosa a la base de datos')
    })
    .catch((err)=>{
        console.error(err)
    })



app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs'); //configurar el motor de plantillas

app.use((req,res,next) => {
console.log(res)
next();
})

app.use(express.static("public"))
app.use(rutas);



//app.use(express.static(path.join(__dirname,"public")))

app.use('/public',express.static(path.join(__dirname,"public")))

app.listen(port, ()=>{
    console.log(`El servidor esta ejecutando en el puerto ${port}`)
});
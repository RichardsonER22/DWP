const express= require ('express')
const router=express.Router();
const paginas=require('../controllers/paginasController.js');

router.get("/",paginas.inicio);

router.get("/formulario",(req,res)=>{
    res.render('formulario') 

})

router.get("/login",(req,res)=>{
    res.render('login')
}
) 

router.get("/productos",(req,res)=>{
    res.render('productos')
}
) 


module.exports=router;
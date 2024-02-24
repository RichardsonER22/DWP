const inicio=(req,res)=>{
    res.render('index.html',{titulo:inicio})
}

const productos=(req,res)=>{
    res.render('Productos',{titulo:productos})
}

module.exports ={
    inicio,
    productos,
}
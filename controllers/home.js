module.exports=
{
  index : function (rq,res,next)
  {
      res.render('index',{title:'Pagina principal',tst:'Escriba prueba1 o prueba2'});
  }
}

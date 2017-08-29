/*
Esta clase renderiza el archivo index.jade para mostrarse en pagina de inicio,
ademas de enviar el id del proyecto que desea testear por medio de ajax.
*/
var correspondencia_desicion = require('./decide');
module.exports=
{
  index : function (rq,res,next)
  {
    //Renderiza la vista index
      res.render('index', { title: 'Inicio' });
  },
  teser: function(rq,res,next)
  {
    var e=rq.body.e;
    console.log(e);
    correspondencia_desicion.importaNum(e);
  },

  errorTest: function (rq, rs, next)
  {
      res.render('error', {title:'Ha ocurrido un error'});
      var e = rq.body.e;
      correspondencia_desicion.importaNum(e);
  }

}

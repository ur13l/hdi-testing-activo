var mysql = require('mysql'); //Variable para hacer las consultas en la BD
var config = require('.././database/configuracion'); //variable que exporta la configuracion de la BD
var de = require('./decide');
module.exports=
{

  resultadosP1: function(req,res,next)
  {
      var con = mysql.createConnection(config);
      var id = de.test();
      console.log('Estoy usando el id------>'+id);
      con.connect();
      var resultado = null;
      con.query('SELECT * from prueba where id_caso_prueba=?', id, function (err, rows, field)
    {
      if(err) throw err;
      resultado = rows;
      res.render('rprueba1', { resultados: resultado })
      con.end();
    });
  }

}

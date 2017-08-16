var mysql = require('mysql');

  module.exports=
  {
    prueba1 : function (rq,res,next)
    {
        var config = require('.././database/configuracion');
        var connect = mysql.createConnection(config);
        console.log('acepte la configuracion');
        var pruebas = null;
        connect.connect();

        connect.query('SELECT * FROM caso_prueba',function(error,rows,fields){
          if (error) throw error;
          pruebas = rows;
          connect.end();
          res.render('prueba1',{title:'Prueba 2',tst:pruebas});
        });

    }
  }

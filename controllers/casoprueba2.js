var mysql = require('mysql');

  module.exports=
  {
    prueba2 : function (rq,res,next)
    {
        var config = require('.././database/configuracion');
        var connect = mysql.createConnection(config);
        console.log('acepte la configuracion');
        var c_pruebas = null;
        var pruebas = null;
        connect.connect();
        connect.query('SELECT * FROM caso_prueba',function(error,rows,fields){
          if (error) throw error;
          c_pruebas = rows;
          connect.end();
        });
        connect.connect();
        connect.query('SELECT * FROM pruebas',function(error,rows,fields){
          if (error) throw error;
          pruebas = rows;
          connect.end();
        });
        res.render('prueba2',{title:'Prueba 2',tcpruebas:c_pruebas,tpruebas:pruebas});
    }
  }

var mysql = require('mysql'); //Variable para hacer las consultas en la BD
var config = require('.././database/configuracion'); //variable que exporta la configuracion de la BD

// Estas variables son usadas para decidir la ejecucion dependiendo del sistema operativo del usuarios
var isWin = require('is-windows');
var isLin = require('is-linux');
  module.exports=
  {
    prueba1 : function (rq,res,next)
    {
        var con = mysql.createConnection(config);

        con.connect();

        con.query('SELECT * FROM caso_prueba',function(error,rows,fields){
          if (error) throw error;
          pruebas = rows;
          con.end();
          res.render('prueba1',{title:'Prueba 1',tst:pruebas});
        });
    },
    ejecutaPrueba1: function (rq,res,next)
    {
      var id= rq.body.id;
      var con = mysql.createConnection(config);
      var pruebas = null;

      con.connect();
      con.query('SELECT * FROM caso_prueba WHERE id = ?',id,function(error,rows,fields)
      {
        if(error) throw error;
        pruebas = rows;
        con.end();
        if(isWin())
        {
          var camino ='C:/Users/Francisco/Downloads/Telegram Desktop/HDI2';
          console.log(camino);
          console.log('Me estoy preparando para ejecutar el test');
          var exec = require('child_process').exec,child;
          child = exec( 'mvn test -Dtest=HDI#pruebaHDI',
                {
                  encoding: 'utf8',
                  timeout: 0,
                  maxBuffer: 200*1024,
                  killSignal: 'SIGTERM',
                  cwd: camino,
                  env: null
                } ,function(error,stdout,stderr)
                  {
  	                 console.log('stdout: ' + stdout);
  	                 console.log('stderr: ' + stderr);
  	                 if(error !==null){ console.log('error'+error);}
                  });
      } else if(isLin())
      {
        console.log('rechazado');
      } });
    }
  }

var mysql = require('mysql'); //Variable para hacer las consultas en la BD
var config = require('.././database/configuracion'); //variable que exporta la configuracion de la BD

// Estas variables son usadas para decidir la ejecucion dependiendo del sistema operativo del usuarios
var isWin = require('is-windows');
var isLin = require('is-linux');

module.exports=
  {
    /*Funcion que obtiene los datos de las pruebas y los envia a la
     tabla en el archivo prueba1.jade para su muestra en pantalla*/
    prueba2 : function (rq,res,next)
    {
        var con = mysql.createConnection(config);

        con.connect();

        con.query('SELECT * FROM caso_prueba WHERE tipo_prueba=2',function(error,rows,fields){
          if (error) throw error;
          pruebas2 = rows;
          con.end();
          res.render('prueba1',{title:'Prueba 2',tst2:pruebas2});
        });
    },
    /*Funcion que selecciona los test de la base de datos y posteriormiente
      ejecuta el test con los datos obtenidos  */
    ejecutaPrueba2: function (rq,res,next)
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
          var exec = require('child_process').exec,child;
          child = exec( 'mvn test -Dtest='+pruebas[0].class,
                {
                  encoding: 'utf8',
                  timeout: 0,
                  maxBuffer: 200*1024,
                  killSignal: 'SIGTERM',
                  cwd: pruebas[0].pathw,
                  env: null
                } ,function(error,stdout,stderr)
                  {
  	                 console.log('' + stdout);
  	                 console.log('' + stderr);
  	                 if(error !==null){ console.log(''+error);}
                  });
      } else if(isLin())
      {

      }else console.log('SO no soportado');
    });
    }
  }

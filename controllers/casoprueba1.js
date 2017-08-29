 //Variable para hacer las consultas en la BD
var mysql = require('mysql');
//Variable que exporta la configuracion de la BD
var config = require('.././database/configuracion');
var dateformat = require('dateformat');

/* Estas variables son usadas para decidir la ejecucion dependiendo del
sistema operativo del servidor*/
var isWin = require('is-windows');
var isLin = require('is-linux');

/*Estas banderas deciden que test será ejecutado y que versiones
serán mostradas en los resultados*/
var de = require('./decide.js');
module.exports=
  {
    /*Funcion que obtiene los datos de las pruebas y los envia a la
     tabla en el archivo prueba1.jade para su muestra en pantalla*/
    prueba1 : function (rq,res,next)
    {
          var id = de.test();
            var con = mysql.createConnection(config);
            con.connect();
            console.log(id+' <--??');
            con.query('SELECT * FROM caso_prueba WHERE tipo_prueba = ?', id, function (error, rows, fields)
            {
                if (error) throw error;
                pruebas = rows;
                console.log(pruebas + '<--que hice');
                con.end();
                res.render('prueba1',{title:'Prueba 1',tst:pruebas});
            });
          
    },

    /*Funcion que selecciona los test de la base de datos y posteriormiente
      ejecuta el test con los datos obtenidos  */
    ejecutaPrueba1: function (rq,res,next)
    {
        var pruebas = null;
        var id = de.test();
        var dateF = Date();
        var fecha = dateformat(dateF, 'yyyy-mm-dd hh:MM:ss')
        console.log(fecha);
        con.connect();
        con.query('SELECT * FROM caso_prueba WHERE id = ?', id, function (error, rows, fields)
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

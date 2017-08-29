/*
En esta clase se manejan todas las rutas en la aplicación web
*/

var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

//Ruta a index
router.get('/', controllers.home.index);

//Ruta a error por test no seleccionado
router.get('/error');

//Ruta a prueba
router.get('/prueba',controllers.casoprueba1.prueba1);

//Ruta a tabla de historial de pruebas1
router.get('/resultadoP1',controllers.rCP1.resultadosP1);

//Ruta a dirección de ejecucion de test en Prueba 1
router.post('/ejecprueba1',controllers.casoprueba1.ejecutaPrueba1);

//Ruta a seleccionador de prueba
router.post('/sPrueba',controllers.home.teser);
module.exports = router;

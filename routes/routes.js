var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

//Ruta a index
router.get('/', controllers.home.index);

//Ruta a prueba1
router.get('/prueba1',controllers.casoprueba1.prueba1);

//Ruta a tabla de historial de pruebas

//Ruta a tabla de ejecución de test
router.post('/ejecprueba1',controllers.casoprueba1.ejecutaPrueba1);

module.exports = router;

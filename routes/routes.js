var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

//Ruta a index
router.get('/', controllers.home.index);

//Ruta a prueba1
router.get('/prueba1',controllers.casoprueba1.prueba1);

//ruta a prueba2
router.get('/prueba2',controllers.casoprueba2.prueba1);

module.exports = router;

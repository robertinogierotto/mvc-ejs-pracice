// Acá nos falta express y el router
var express = require('express');
var router = express.Router(); 
// Aća nos falta traer el controller
const mainController = require('../controllers/mainController');

// Acá definimos las rutas
router.get('/home', mainController.index); /* GET - home page  */
router.get('/detalleDelPlato/:idPlato', mainController.detalleDelPlato); /* GET - detalle page  */

// Acá exportamos el resultado

module.exports = router;




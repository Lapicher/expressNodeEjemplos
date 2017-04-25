var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // logica de negocio, consulta a base de datos, etc

  res.render('index', { title: 'Express' });
  
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/posti', function(req, res){
      res.send("OKKKKKKKKKKK");
});

router.delete('/hijo/borra', function(req, res){
     //res.send("DETELE");
     res.status(404).send("SSDSDSDs")
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

    //
    //request({url:'http://132.123.23.4/4000/mesasAsignadas?', method:GET}, function(req, res, body){
          var mesas =
                [
                     {
                           idmesa: 1,
                           name_mesa: "Mesa 1",
                           estatus: 1
                     },
                     {
                           idmesa: 2,
                           name_mesa: "Mesa 2",
                           estatus: 0
                     },
                     {
                           idmesa: 3,
                           name_mesa: "Mesa 3",
                           estatus: 0
                     },
                     {
                           idmesa: 4,
                           name_mesa: "Mesa 4",
                           estatus: 1
                     }
                ];

          res.render('listadoMesas', { mesas: mesas });
    //} );

});

module.exports = router;

var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.listen(3000,function(){
	console.log("Servidor corriendo en el puerto 3000");
});

app.post('/login', function(req, res){
	console.log("recibi tu peticion");
	var username= req.body.username;
	var password= req.body.password;
	/*
	request('http://localhost:4000/usuario?username='+username+'&password='+password,
		function(request, response, body){
			console.log(body);
			body = JSON.parse(body);
       			if(body.length>0 && body[0].username!=undefined){
				// usuario correcto
                                var token
				res.status(200).send("LOgeado correctamente");
			}
			else{
				//usuario incorrecto
				res.status(401).send("Not Authorized");
			}				
		});
	*/

	request({url:"http://localhost:4000/usuario", method:'POST', json:true, body:req.body},
		function(request, response, body){
			res.send(body);
		});	
});

app.get('/api', function(req, res){
	console.log(req.query);
	var dato= req.query;
	res.status(200).send(dato);
});


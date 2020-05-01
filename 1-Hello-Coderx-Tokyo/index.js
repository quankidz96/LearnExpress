const express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response){
	response.send('Hello');
});

app.listen(port, function(){
	console.log('Server Start in port: '+ port);
});
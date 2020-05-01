const express = require('express');
var app = express();
var port = 3000;

// PUG template
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.render('index');
});
app.get('/cart', function(req, res){
	res.render('cart/cartlist', {
		products: [
			{id:1, name:'adadad'},
			{id:2, name:'adadad'}
		]
	});
});

app.listen(port, function(){
	console.log('Server Start in port: '+ port);
});
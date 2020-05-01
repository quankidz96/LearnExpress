const express = require('express');
var app = express();
var port = 3000;


var products = [
	{id:1, name:'ahihi'},
	{id:2, name:'24234234235'}
];
// PUG template
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.render('index');
});
app.get('/cart', function(req, res){
	res.render('cart/cartlist', { products: products
	});
});
app.get('/cart/search', function(req, res){
	var q =  req.query.q;
	var filted = products.filter(function(item){
		return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('cart/cartlist', { products: filted });
});
// Bài 3 


app.listen(port, function(){
	console.log('Server Start in port: '+ port);
});
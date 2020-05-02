const express = require('express');
var app = express();
var port = 3000;

//
var shortid = require('shortid');

//req.body
var bodyParser = require('body-parser');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// lowdb
var low = require('lowdb');
var FileSync =require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
db = low(adapter);
db.defaults({cart:[]})
  .write()

// PUG template
app.set('view engine', 'pug');
app.set('views', './views');


//GET
app.get('/', function(req, res){
	res.render('index');
});

app.get('/cart', function(req, res){
	res.render('cart/cartlist', { 
		products: db.get('cart').value()
	});
});

app.get('/cart/create', function(req, res){
	res.render('cart/create');
})

app.get('/cart/search', function(req, res){
	var q =  req.query.q;
	var filted = db.get('cart').value().filter(function(item){
		return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('cart/cartlist', { 
		products: filted,
		queryText: q
	});
});

app.get('/view/:id', function(req, res){
	var id = req.params.id;
	var product = db.get('cart').find({id: id}).value();
	console.log(product);
	res.render('cart/view',{
		product : product	
	});
});

// POST
app.post('/cart/create', function(req, res){
	req.body.id = shortid.generate();
	db.get('cart').push(req.body).write();
	res.redirect('/cart');
});


app.listen(port, function(){
	console.log('Server Start in port: '+ port);
});
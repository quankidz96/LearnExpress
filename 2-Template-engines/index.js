const express = require('express');
//req.body midleware
var bodyParser = require('body-parser');

var cartRouter = require('./routes/cart.route');

var app = express();
var port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// PUG template
app.set('view engine', 'pug');
app.set('views', './views');

//GET
app.get('/', function(req, res){
	res.render('index');
});

app.use('/cart', cartRouter);
// POST

app.listen(port, function(){
	console.log('Server Start in port: '+ port);
});
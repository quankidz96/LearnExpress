var express = require('express');
var shortid = require('shortid');

var db = require('../db');

var router = express.Router();

router.get('/', function(req, res){
	res.render('cart/index', { 
		products: db.get('cart').value()
	});
});

router.get('/create', function(req, res){
	res.render('cart/create');
})

router.get('/search', function(req, res){
	var q =  req.query.q;
	var filted = db.get('cart').value().filter(function(item){
		return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('cart/index', { 
		products: filted,
		queryText: q
	});
});

router.get('/view/:id', function(req, res){
	var id = req.params.id;
	var product = db.get('cart').find({id: id}).value();
	console.log(product);
	res.render('cart/view',{
		product : product	
	});
});

// POST
router.post('/create', function(req, res){
	req.body.id = shortid.generate();
	db.get('cart').push(req.body).write();
	res.redirect('/cart');
});
module.exports = router
var db = require('../db');

module.exports.index = function(req, res){
	res.render('cart/index', { 
		products: db.get('cart').value()
	});
}
module.exports.create = function(req, res){
	res.render('cart/create');
} 

module.exports.search = function(req, res){
	var q =  req.query.q;
	var filted = db.get('cart').value().filter(function(item){
		return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('cart/index', { 
		products: filted,
		queryText: q
	});
}

module.exports.viewinfo = function(req, res){
	var id = req.params.id;
	var product = db.get('cart').find({id: id}).value();
	res.render('cart/view',{
		product : product	
	});
}

module.exports.postCreate = function(req, res){
	req.body.id = shortid.generate();
	db.get('cart').push(req.body).write();
	res.redirect('/cart');
}
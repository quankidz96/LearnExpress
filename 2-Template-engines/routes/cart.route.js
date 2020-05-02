var express = require('express');
var shortid = require('shortid');


// controllers
var controllers = require('../controllers/cart.controller')

var router = express.Router();

// GET
router.get('/', controllers.index);

router.get('/create', controllers.create);

router.get('/search', controllers.search);

router.get('/view/:id', controllers.viewinfo);

// POST
router.post('/create', controllers.postCreate);
module.exports = router;
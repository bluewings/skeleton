/*jslint browser: true, regexp: true, unparam: true, indent: tab */
/*global jQuery: true */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', {
		title: 'Your Title',
		stylesheets: ['/stylesheets/style.css'],
		javascripts: []
	});
});

/* GET templates. */
router.get('/templates/:id', function (req, res) {
	res.render('templates/' + req.params.id);
});

module.exports = router;
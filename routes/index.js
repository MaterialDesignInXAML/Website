var express = require('express');
var router = express.Router();
var path = require('path');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var IndexLayoutTabBar = require('../bin/components/IndexLayoutTabBar');
var IndexLayoutTabBarFactory = React.createFactory(IndexLayoutTabBar);


function render(res, partialId) {
	
	var tabMarkup = ReactDOMServer.renderToString(IndexLayoutTabBarFactory({}));
	
	res.render('index.ejs', 
	{ 
		tabMarkup : tabMarkup,
		partialId : partialId,
		partialSource: 'partials/'+partialId+'.html' 
	});
}

router.get('/', function(req, res, next) {
	render(res, "home");					
});

router.get('/doobry', function(req, res, next) {
	render(res, "doobry");					
});

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  	var file = __dirname + "/../views/index.html";
	file = path.resolve(file);
	res.sendFile(file);
});
*/

module.exports = router;
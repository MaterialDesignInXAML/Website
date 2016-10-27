var express = require('express');
var router = express.Router();
var path = require('path');


function render(res, partialId) {
	res.render('index.ejs', 
	{ 
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
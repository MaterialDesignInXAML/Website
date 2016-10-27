var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

function sendFile(req, res, name) {
    var file = __dirname + "/../views/partials/" + name + ".html";
	file = path.resolve(file);
	res.sendFile(file);
}


fs.readdir(__dirname + "/../views/partials", (err, files) => {
  files.forEach(file => {
      var f = file.substr(0, file.lastIndexOf('.')) || input;
      console.log("partial route " + f);
      
      router.post('/'+f, function(req, res, next) {
          sendFile(req, res, f)
          });

  });
})


	


module.exports = router
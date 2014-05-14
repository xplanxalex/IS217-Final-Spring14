
/*
 * GET home page.
 */

var laptopFactory = require("../public/javascripts/laptopFactory.js")
var qunit = require("../public/javascripts/vendor/qunit.js")

exports.index = function(req, res){
  res.render('index', { title: 'Buy This' });
};

exports.addLaptop = function(req, res){
	console.log(req.body);
	var basicLaptop = laptopFactory.buildBasic();
	console.log(basicLaptop);
	var newLaptop = laptopFactory.decorateLaptop(req.body.scrn, req.body.hdd, req.body.ram, basicLaptop);
	console.log(newLaptop);
};


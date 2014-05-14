
/*
 * GET home page.
 */

var laptopFactory = require("../public/javascripts/laptopFactory.js")
var qunit = require("../public/javascripts/vendor/qunit.js")

exports.index = function(req, res){
  res.render('index', { title: 'Buy This' });
};
exports.purchase = function(req, res){
	res.render('purchase', { title: 'Purchase' });
};
exports.quotes = function(req, res){
	res.render('quotes', { title: 'Quotes' });
};
exports.addLaptop = function(req, res){
	console.log(req.body);
	var basicLaptop = laptopFactory.buildBasic();
	console.log(basicLaptop);
	var newLaptop = laptopFactory.decorateLaptop(req.body.scrn, req.body.hdd, req.body.ram, basicLaptop);
	console.log(newLaptop);
	//console.log("we got here");
	//var sys = require('util');
	var mongoose = require('mongoose');
	//mongoose.connect('mongodb://localhost/is217-final');
	var Schema = mongoose.Schema;
	//Model
	var QuoteSchema = new Schema({
		screenSize : String,
		hdd : String,
		ram: String,
		price: Number,
	});
	mongoose.model('Quote', QuoteSchema);
	//Controller
	var Quote = mongoose.model('Quote');
	
	var newQuote = new Quote ( {
		screenSize: newLaptop.screenSize,
		hdd: newLaptop.hddSize,
		ram: newLaptop.ramSize,
		price: newLaptop.price
	});
	
	newQuote.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      	console.log(newLaptop);
      	res.render('purchase', { title: 'Purchase', screenSize: newLaptop.screenSize, hddSize: newLaptop.hddSize, ramSize: newLaptop.ramSize, price: newLaptop.price }); 
    }

  	});
};
exports.retrieveQuotes = function(req, res) {
	//console.log("we got here");
	//var sys = require('util');
	var mongoose = require('mongoose');
	//mongoose.connect('mongodb://localhost/is217-final');
	var Schema = mongoose.Schema;
	//Model
	var QuoteSchema = new Schema({
		screenSize : String,
		hdd : String,
		ram: String,
		price: Number,
	});

	mongoose.model('Quote', QuoteSchema);
	//Controller
	var Quote = mongoose.model('Quote');
	Quote.find(function(req,quotes) {
		console.log(Quote.screenSize);
		res.render('quotes', {
			title: 'Quotes' ,
			quotes: quotes
		});
	});
};


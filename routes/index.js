
/*
 * GET home page.
 */

var calculator = require("../public/javascripts/calculator.js")
var qunit = require("../public/javascripts/vendor/qunit.js")

exports.index = function(req, res){
  res.render('index', { title: 'Calculator' });
};
exports.calc = function(req, res){
  res.render('calc', { title: 'Calculator' });
};

exports.add = function(req, res){
  console.log(req.body);
  var result, var1, var2;
  if(!req.body.var1){
  	var1 = 0; 
  }
  if(!req.body.var2){
  	var2 = 0; 
  }
  if(!req.body.var1 || !req.body.var2)
  {
  	result = calculator.addition(var1, var2);
  }
  else
  {
  	result = calculator.addition(req.body.var1, req.body.var2);
  	var1 = req.body.var1;
  	var2 = req.body.var2;
  }
  // Client side test of addition + making sure it returns the right value for output
  function addtest(v1, v2, expected) {
    results.total++;
    var r = calculator.addition(v1, v2);
    if (r !== expected) {
      results.bad++;
      console.log("Expected " + expected +
        ", but was " + r);
    }
  }
  var results = {
    total: 0,
    bad: 0
  };
  addtest(var1, var2, result);
  console.log("Of " + results.total + " tests, " +
    results.bad + " failed, " +
    (results.total - results.bad) + " passed.");
  /*
  qunit.test("prettydate basics", function() {
    equal(calculator.addition(), "just now");
  });*/
  res.render('calc', { title: 'Addition', variable1: var1, variable2: var2, total: result });
  
};
exports.subtract = function(req, res){
  console.log(req.body);
  var result, var1, var2;
  if(!req.body.var1){
  	var1 = 0; 
  }
  if(!req.body.var2){
  	var2 = 0; 
  }
  if(!req.body.var1 || !req.body.var2)
  {
  	result = calculator.subtraction(var1, var2);
  }
  else
  {
  	result = calculator.subtraction(req.body.var1, req.body.var2);
  	var1 = req.body.var1;
  	var2 = req.body.var2;
  }
  // Client side test of subtraction + making sure it returns the right value for output
  function subtracttest(v1, v2, expected) {
    results.total++;
    var r = calculator.subtraction(v1, v2);
    if (r !== expected) {
      results.bad++;
      console.log("Expected " + expected +
        ", but was " + r);
    }
  }
  var results = {
    total: 0,
    bad: 0
  };
  subtracttest(var1, var2, result);
  console.log("Of " + results.total + " tests, " +
    results.bad + " failed, " +
    (results.total - results.bad) + " passed.");
  res.render('calc', { title: 'Subtraction', variable1: var1, variable2: var2, total: result });
  
};
exports.multiply = function(req, res){
  console.log(req.body);
  var result, var1, var2;
  if(!req.body.var1){
  	var1 = 0; 
  }
  if(!req.body.var2){
  	var2 = 0; 
  }
  if(!req.body.var1 || !req.body.var2)
  {
  	result = calculator.multiplication(var1, var2);
  }
  else
  {
  	result = calculator.multiplication(req.body.var1, req.body.var2);
  	var1 = req.body.var1;
  	var2 = req.body.var2;
  }
  // Client side test of multiplication + making sure it returns the right value for output
  function multiplytest(v1, v2, expected) {
    results.total++;
    var r = calculator.multiplication(v1, v2);
    if (r !== expected) {
      results.bad++;
      console.log("Expected " + expected +
        ", but was " + r);
    }
  }
  var results = {
    total: 0,
    bad: 0
  };
  multiplytest(var1, var2, result);
  console.log("Of " + results.total + " tests, " +
    results.bad + " failed, " +
    (results.total - results.bad) + " passed.");
  res.render('calc', { title: 'Multiplication', variable1: var1, variable2: var2, total: result });
  
};
exports.divide = function(req, res){
  console.log(req.body);
  var result, var1, var2;
  if(!req.body.var1){
  	var1 = 0; 
  }
  if(!req.body.var2){
  	var2 = 0; 
  }
  if(!req.body.var1 || !req.body.var2)
  {
  	result = calculator.division(var1, var2);
  }
  else
  {
  	result = calculator.division(req.body.var1, req.body.var2);
  	var1 = req.body.var1;
  	var2 = req.body.var2;
  }
  // Client side test of addition + making sure it returns the right value for output
  function dividetest(v1, v2, expected) {
    results.total++;
    var r = calculator.division(v1, v2);
    if (r !== expected) {
      results.bad++;
      console.log("Expected " + expected +
        ", but was " + r);
    }
  }
  var results = {
    total: 0,
    bad: 0
  };
  dividetest(var1, var2, result);
  console.log("Of " + results.total + " tests, " +
    results.bad + " failed, " +
    (results.total - results.bad) + " passed.");
  res.render('calc', { title: 'Division', variable1: var1, variable2: var2, total: result });
  
};

var expect = require("chai").expect;
var assert = require('chai').assert;
var should = require('chai').should;

var calculator = require("../public/javascripts/calculator.js");

describe("Calculator", function(){
	describe("#addition()", function(){
		it("should return a number that is set to the paragraph field", function(){
			var var1 = 4;
            var var2 = 5;
            var results = calculator.addition(var1, var2);
            expect(results).to.be.a('number');
		});
		it("arithmetic should be correct", function(){
			var var1 = 4;
            var var2 = 5;
            var results = calculator.addition(var1, var2);
            expect(results).to.be.equal(var1 + var2);
		});
	});
	describe("#subtraction()", function(){
		it("should return a number that is set to the paragraph field", function(){
			var var1 = 4;
            var var2 = 5;
            var results = calculator.subtraction(var1, var2);
            expect(results).to.be.a('number');
		});
		it("arithmetic should be correct", function(){
			var var1 = 4;
            var var2 = 5;
            var results = calculator.subtraction(var1, var2);
            expect(results).to.be.equal(var1 - var2);
		});
	});
	describe("#multiplication()", function(){
		it("should return a number that is set to the paragraph field", function(){
			var var1 = 4;
            var var2 = 5;
            var results = calculator.multiplication(var1, var2);
            expect(results).to.be.a('number');
		});
		it("arithmetic should be correct", function(){
			var var1 = 4;
            var var2 = 5;
            var results = calculator.multiplication(var1, var2);
            expect(results).to.be.equal(var1 * var2);
		});
	});
	describe("#division()", function(){
		it("should return a number that is set to the paragraph field", function(){
			var var1 = 4;
            var var2 = 5;
            var results = calculator.division(var1, var2);
            expect(results).to.be.a('number');
		});
		it("arithmetic should be correct", function(){
			var var1 = 4;
            var var2 = 5;
            var results = calculator.division(var1, var2);
            expect(results).to.be.equal(var1 / var2);
		});
	});


});
exports = module.exports = {};


exports.addition = function (var1, var2)
{
	var1 = Number(var1);
	var2 = Number(var2);
	result = Number(var1 + var2);
	
	return result;
}
exports.subtraction = function (var1, var2)
{
	var1 = Number(var1);
	var2 = Number(var2);
	result = Number(var1 - var2);
	
	return result;
}
exports.multiplication = function (var1, var2)
{
	var1 = Number(var1);
	var2 = Number(var2);
	result = Number(var1 * var2);
	
	return result;
}
exports.division = function (var1, var2)
{
	var1 = Number(var1);
	var2 = Number(var2);
	result = Number(var1 / var2);
	
	return result;
}
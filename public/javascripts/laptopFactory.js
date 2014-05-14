exports = module.exports = {};

// THIS USES THE FACTORY PATTERN -------V

exports.buildBasic = function()
{
	var basicLaptop = {
		screenSize:"11 inches",
		hddSize:"128 GB",
		ramSize:"8 GB",
		price:1000
	};
	return basicLaptop;
}

// ADD DECORATOR --------v

exports.decorateLaptop = function(scrn, hdd, ram, laptop)
{
	if(scrn == "15")
	{
		laptop.screenSize = "15 inches";
		laptop.price = laptop.price + 200;
	}
	if(hdd == "256")
	{
		laptop.hddSize = "256 GB";
		laptop.price = laptop.price + 200;
	}
	if(ram == "16")
	{
		laptop.ramSize = "16 GB";
		laptop.price = laptop.price + 200;
	}
	return laptop;
}

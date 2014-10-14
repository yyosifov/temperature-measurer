var TemperatureMeasurer = require('./TemperatureMeasurer.js');

// Start measuring the Temperature, using the values provided from PIN A0 and measure every 10 seconds (10000 milliseconds)
var temperatureMeasurer = new TemperatureMeasurer('A0', 10000);

temperatureMeasurer.on('temperature.measured', function(value) {
	console.log('New temperature measured: ' + value);
});

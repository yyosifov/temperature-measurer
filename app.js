var TemperatureMeasurer = require('./TemperatureMeasurer.js');

var temperatureMeasurer = new TemperatureMeasurer('A0', 10000);

temperatureMeasurer.on('temperature.measured', function(value) {
	console.log('New temperature measured: ' + value);
});
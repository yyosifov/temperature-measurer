temperature-measurer
====================

Sample Temperature Measurer event emitter, based on Johnny Five. It measures the temperature on time interval and emits the value of the temperature (in celcius).

# Setup #

In order to run this small sample, you need to have an Arduino with one TMP36 temperature sensor wired on Analog pin 0 - A0.

# Run #

In two simple steps:

- ```npm install```
- ```node app.js```

# Sample usage #

The Temperature Measurer inherits from Event Emitter and emits events when a new temperature gets measured. In the construct of TemperatureMeasurer are passed 2 arguments - the pin of the TMP36 sensor and at what interval to measure.

```javascript
var TemperatureMeasurer = require('./TemperatureMeasurer.js');

// Start measuring the Temperature, using the values provided from PIN A0 
// and perform measure every 10 seconds (10000 milliseconds)
var temperatureMeasurer = new TemperatureMeasurer('A0', 10000);

temperatureMeasurer.on('temperature.measured', function(value) {
	console.log('New temperature measured: ' + value);
}); 

``` 

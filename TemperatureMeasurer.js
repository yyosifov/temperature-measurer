var five = require('johnny-five'),
    EventEmitter = require('events').EventEmitter;

function TemperatureMeasurer(pin, frequency) {
  this.pin = pin || 'A0';
  this.frequency = frequency || 300000; // frequency is in milliseconds!

  var self = this;
  this.sensor = null;
  this.board = new five.Board();

  this.board.on('ready', function() {
    self.sensor = new five.Sensor({
      pin: self.pin,
      freq: self.frequency
    });

    self.sensor.on('data', function() {
      var analogValue = this.value;
      var celsiusValue = ((analogValue * 0.004882814) - 0.5) * 100; // convert to celcius

      console.log(celsiusValue + "°C");
      self.emit('temperature.measured', celsiusValue);
    });
  });

  self.on('shutdown', function() {
    console.log('shutting down temperature measurer.');
  });
};

require('util').inherits(TemperatureMeasurer, EventEmitter);

module.exports = TemperatureMeasurer;
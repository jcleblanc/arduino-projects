var five = require("../lib/johnny-five.js"),
  board = new five.Board();

board.on("ready", function() {
  // Default to pin 13
  var led1 = new five.Led({pin: 4});
  var led2 = new five.Led({pin: 5});
  var led3 = new five.Led({pin: 6});
  var led4 = new five.Led({pin: 7});

  this.wait(1000, function(){ led1.on(); });
  this.wait(2000, function(){ led2.on(); });
  this.wait(3000, function(){ led3.on(); });
  this.wait(4000, function(){ led4.on(); });
});

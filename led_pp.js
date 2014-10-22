var paypal_sdk = require('paypal-rest-sdk');
var five = require('../lib/johnny-five.js'),
  board = new five.Board();
  
var config_options ={
    'host': 'api.sandbox.paypal.com',
    'port': '',
    'client_id': 'YOUR CLIENT ID',
    'client_secret': 'YOUR CLIENT SECRET'
};

var card_data = {
    'type': 'visa',
    'number': '4417119669820331',
    'expire_month': '11',
    'expire_year': '2018',
    'cvv2': '123',
    'first_name': 'Joe',
    'last_name': 'Shopper'
};

board.on('ready', function() {
    // Default to pin 13
    var led1 = new five.Led({pin: 4});
    var led2 = new five.Led({pin: 5});
    var led3 = new five.Led({pin: 6});
    var led4 = new five.Led({pin: 7});
    
    paypal_sdk.credit_card.create(card_data, config_options, function(err , res){
        if (err) {
            console.log(err);
            throw err;
        }
        if (res) {
            console.log('Credit Card Stored');
            setTimeout(function(){ led1.on(); }, 1000);
            setTimeout(function(){ led2.on(); }, 2000);
            setTimeout(function(){ led3.on(); }, 3000);
            setTimeout(function(){ led4.on(); }, 4000);
        }
    });
});


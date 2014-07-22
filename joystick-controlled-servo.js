var five = require("../lib/johnny-five.js"),
    board, joystick, servo;

board = new five.Board();

board.on("ready", function(){
    //new joystick hardware instance
    joystick = new five.Joystick({
        pins: ["A0", "A1"],
        freq: 500
    });
    
    //new servo motor hardware instance
    servo = new five.Servo({
      pin: "10",
      type: "continuous"
    }).stop();

    //on joystick move event
    joystick.on("axismove", function(err, timestamp) {
        //if axis moved right, 
        if (this.fixed.x > 0.8){ servo.cw(); }
        else if (this.fixed.x < 0.2){ servo.ccw(); }
    });
});

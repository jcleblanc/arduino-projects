var five = require("../lib/johnny-five.js"),
    keypress = require("keypress"),
    board, joystick;

board = new five.Board();

board.on("ready", function(){
    //new joystick hardware instance
    joystick = new five.Joystick({
        pins: ["A0", "A1"],
        freq: 500
    });
    
    //new servo motor hardware instance
    var servo = new five.Servo({
      pin: "10",
      type: "continuous"
    }).stop();
  
    //inject joystick hardware into repl instance to allow command line access
    board.repl.inject({
      joystick: joystick
    });

    //on joystick move event
    joystick.on("axismove", function(err, timestamp) {
        //capture x axis movement
        this.fixed.x;
        
        //if axis moved right, 
        if (this.fixed.x > 0.8){ servo.cw(); }
        else if (this.fixed.x < 0.2){ servo.ccw(); }
    
        //console.log("X:", this.fixed.x);
        //console.log("Y:", this.fixed.y);
        //console.log("MAG:", this.magnitude);
    });
});

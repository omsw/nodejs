const Many = require("extends-classes");

const Heartbeat = require("./lib/sendheartbeat");
const Bootnotification = require("./lib/sendbootnotification");

class Socketcall extends Many(Heartbeat,Bootnotification) {
    constructor () {
        super();
    
       
      }

      callResponse(device,msg){
       
        try {
            var obj = JSON.parse(msg);
        } catch (e) {
            var obj = msg;
        }

        let action = obj[2];
        let response = "";
        switch (action) {
            case "Heartbeat":
                response = this.responseHeartbeat(device,msg);
            break;

            case "BootNotification":
                response = this.responseBootNotification(device,msg);
            break;
        
            default:
                response = "Test";
            break;
        }

          //console.log(response);
          return response;

      }
    
  }
    
  module.exports = Socketcall;


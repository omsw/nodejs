var dateFormat = require('dateformat');
const helper = require("./helper");
//const {checkCharger} = require("./checkCharger");
//const chargeData = new validCharger();


class BootNotification{
   
    responseBootNotification(device,msg){
		
		let now = new Date();
		let date = dateFormat(now, "isoUtcDateTime");
		
		let data;
		let response;
		
		try {
            data = JSON.parse(msg);
        } catch (e) {
             data = msg;
		}
		
		var res = helper.getDevice(device);
        
	    console.log(res);
		
		
		
		//if(res){
			// response = '[3,"'+data[1]+'",{"status":"Accepted", "currentTime":"'+date+'","interval":"900" }]';
			
		//}else{
			
			 response = '[4,"'+data[1]+'",{"errorCode":"GenericError", "errorDescription":"Request is not valid"} ]';
			
		//}
		
        return response;

	}

	
}

module.exports = BootNotification;
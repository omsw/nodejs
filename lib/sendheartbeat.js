var dateFormat = require('dateformat');
//var Promise = require('promise');
const db = require("../models");

const validCharger = require("./checkCharger");
//const chargeData = new validCharger();
//let heartbeat;
//let printAddress;

class Heartbeat{
	
	constructor(){
		
	}
   
    responseHeartbeat(device,msg){
		
		let now = new Date();
		let date = dateFormat(now, "isoUtcDateTime");
		
		let data;
		let response;
		
		try {
            data = JSON.parse(msg);
        } catch (e) {
             data = msg;
		}
		
		
		
		let res = chargeData.checkCharger(device);
		
		
	     /* res.then(function(res){
				
				
				
			db.tbl_heartbeat.findOne({ where: { charger_id: escape(device) } }).then(charger => {
			  charger.get({ plain: true });
			  
	
			  
			  //console.log(1);
			 /* db.tbl_heartbeat.find({ where: { title: 'aProject' } }).on('success', function (project) {
					// Check if record exists in db
					if (project) {
					  project.update({
						title: 'a very different title now'
					  })
					  .success(function () {})
					}
				  })*/
			 
			/*}).catch(function(err) {
				
			
			});
				
			
					
			}).catch(function(err) {
				
				console.log(3); 

					
			});*/
			
			
		
        
		return '[4,"fdgd",{"errorCode":"GenericError", "errorDescription":"Request is not valid"} ]';

	}
	


	
	
	

	
	
}

module.exports = Heartbeat;
const Sequelize = require('sequelize');
const db = require("../models");
var Promise = require('promise');

async function checkCharger(device){

	//const p = new Promise(function(resolve) {
		var p = await db.tbl_charger.findOne({ attributes: ['charger_id'], where: { charger_id: escape(device) } }).then((schedules) => {
				return schedules;
			})
			
	//});

	//var a = p.then((schedules) => {
		//console.log(`there were ${schedules.length} schedules`);
		//db.close();
	//	return schedules;
	//});

	return p;
	
		
	
	 //  return await db.tbl_charger.findAll();
  /* return  await new Promise(function (resolve, reject) {
		 return  db.tbl_charger.findOne({ attributes: ['charger_id'], where: { charger_id: escape(device) } }).then(charger => {
			   
			    return charger;
			}).then(value => resolve(value));
		});

       /* let res = db.tbl_charger.findOne({ attributes: ['charger_id'], where: { charger_id: escape(device) } }).then(charger => {
			charger.get({ plain: true });
		}).catch(function(err) {

		});*/
		
		

    }


module.exports = {checkCharger};
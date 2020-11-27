//const { resolve, reject } = require("promise");
const db = require("../models");
//var Promise = require('promise');

async function getDevice(device) {

        try {

        return  await  db.tbl_charger.findOne({ attributes: ['charger_id'], where: { charger_id: escape(device)}});
            
        }catch (error) {

            throw new Error(error);
            
        }


}



module.exports ={
    getDevice
}


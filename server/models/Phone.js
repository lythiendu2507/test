const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
    
         name: {type: String},
         price: {type: String},
         system: {type: String},
         camera: {type: String},
         cpu: {type: String},
         ram: {type:String},
         sim: {type: String},
         pin: {type: String},
         img:{type:String}

})

module.exports = mongoose.model('phones',PhoneSchema)
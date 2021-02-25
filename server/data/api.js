const  Phone = require('../models/Phone')


const mongoDataMethods = {
    getAllPhones: async () =>  await Phone.find(),
    getPhoneById: async args => await Phone.findById(args)
}
module.exports = mongoDataMethods
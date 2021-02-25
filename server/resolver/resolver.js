const{phones} = require('../data/static')

const resolvers = {
    Query: {
        phones: async (parent,args,context) => {
            return await context.mongoDataMethods.getAllPhones()
        },
       
        phone: async (parent,{id},context) => await context.mongoDataMethods.getPhoneById(id)
    }
}


module.exports = resolvers;
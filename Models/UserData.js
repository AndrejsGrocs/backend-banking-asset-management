const {Schema, model, ObjectId} = require('mongoose')
const router = require('../Routes/userRoutes')

const userDataSchema = new Schema({
      firstname:{type:String, required:true},
      lastname:{type:String, required:true},
      id:{type:String,},
      currency: {type:String, required:true, enum:['USD', 'EUR', 'GBP', 'JPY', 'CNY']},
      accountmoneyamount:{type:Number, required:true},
      country: {type:String, required:true},
      portfoliotype: {type:String, enum:['Aggressive', 'Defensive', 'Income', 'Speculative', 'Hybrid' ]},
      listofassets:[{type:ObjectId, ref: 'UserAssets'}]

})



const UserData = model('UserData', userDataSchema)

module.exports = UserData
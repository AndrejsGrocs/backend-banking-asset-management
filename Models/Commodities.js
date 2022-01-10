const {Schema, model} = require('mongoose')

const userComSchema = new Schema({
    quantityoflots:{type:Number, required:true },
    title:{type:String, required:true },
    ticker:{type:String, required:true },
    
})

const UserCom = model('Commodities', userComSchema)
module.exports = UserCom
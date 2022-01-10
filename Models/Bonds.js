const {Schema, model} = require('mongoose')

const userBondsSchema = new Schema({
    quantityoflots:{type:Number, required:true },
    issuer:{type:String, required:true,},
    type:{type:String, required:true, enum:['Government','Corporate'] },
    ticker:{type:String, required:true },
    
})

const UserBonds = model('Stocks', userBondsSchema)
module.exports = UserBonds
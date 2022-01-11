const {Schema, model} = require('mongoose')

const userBondsSchema = new Schema({
    quantityoflots:{type:Number, required:true },
    title:{type:String, required:true},
    ticker:{type:String, required:true },
    issuer:{type:String, required:true,},
    bondstype:{type:String, required:true, enum:['Government','Corporate'] },
    
    
})

const UserBonds = model('Bonds', userBondsSchema)
module.exports = UserBonds
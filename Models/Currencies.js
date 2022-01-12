const {Schema, model} = require('mongoose')


const userCurrenciesSchema = new Schema({
    quantityoflots:{type:Number, required:true },
    title:{type:String, required:true},
    ticker:{type:String, required:true },
    countryofissuer: {type:String, required:true},
    isreservecurrency: {type:String, required:true, enum:['Yes', 'No']},
    
})


const UserCurrencies = model('UserCurrencies', userCurrenciesSchema)
module.exports = UserCurrencies
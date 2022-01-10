const {Schema, model} = require('mongoose')

const userEtfSchema = new Schema({
    quantityoflots:{type:Number, required:true },
    title:{type:String, required:true},
    ticker:{type:String, required:true },
    countryorregion:{type:String,},   
    etftype: {type:String, required:true, enum:['Bond', 'Stock ', 'Industry', 'Commodity']},
})

const UserEtf = model('Etf', userEtfSchema)
module.exports = UserEtf
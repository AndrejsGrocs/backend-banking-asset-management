const {Schema, model} = require('mongoose')

const userEtfSchema = new Schema({
    quantityoflots:{type:Number, required:true },
    countryorregion:{type:String,},
    ticker:{type:String, required:true },
    etftype: {type:String, required:true, enum:['Growth', 'Dividend', 'New issues', 'Defensive']},
})

const UserEtf = model('Stocks', userEtfSchema)
module.exports = UserEtf
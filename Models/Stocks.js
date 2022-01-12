const {Schema, model} = require('mongoose')

const userStocksSchema = new Schema({
    quantityoflots:{type:Number, required:true },
    title:{type:String, required:true},
    ticker:{type:String, required:true },
    issuer:{type:String, required:true },
    stockstype: {type:String, required:true, enum:['Growth', 'Dividend', 'New issues', 'Defensive']},
})

const UserStocks = model('UserStocks', userStocksSchema)
module.exports = UserStocks
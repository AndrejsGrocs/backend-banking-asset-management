const {Schema, model} = require('mongoose')

const userStocksSchema = new Schema({
    quantityoflots:{type:Number, required:true },
    issuer:{type:String, required:true },
    ticker:{type:String, required:true },
    stockstype: {type:String, required:true, enum:['Growth', 'Dividend', 'New issues', 'Defensive']},
})

const UserStocks = model('Stocks', userStocksSchema)
module.exports = UserStocks
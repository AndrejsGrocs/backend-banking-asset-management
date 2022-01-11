const {Schema, model, ObjectId} = require('mongoose')


const userAssetsSchema = new Schema({
    currencies:[{type: ObjectId, ref:'UserCurrencies'}],
    stocks: [{type: ObjectId, ref:'UserStocks'}],
    bonds: [{type: ObjectId, ref:'UserBonds'}],
    etf: {type:String, enum:[]},
    commodities: {type:String, enum:[]},
    futures: {type:String, enum:[]},



})


const UserAssets = model('UserAssets', userAssetsSchema)
module.exports = UserAssets
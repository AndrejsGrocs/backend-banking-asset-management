const {Schema, model, ObjectId} = require('mongoose')


const userAssetsSchema = new Schema({
    currencies:[{type: ObjectId, ref:'UserCurrencies'}],
    stocks: [{type: ObjectId, ref:'UserStocks'}],
    bonds: [{type: ObjectId, ref:'UserBonds'}],
    etf: [{type: ObjectId, ref:'UserEtf'}],
    commodities: {type:String},
    futures: {type:String},



})


const UserAssets = model('UserAssets', userAssetsSchema)
module.exports = UserAssets
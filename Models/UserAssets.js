const {Schema, model} = require('mongoose')


const userAssetsSchema = new Schema({
    currencies:{type:String, enum:[]},
    stocks: {type:String, enum:[]},
    bonds: {type:String, enum:[]},
    etf: {type:String, enum:[]},
    commodities: {type:String, enum:[]},
    futures: {type:String, enum:[]},



})


const UserAssets = model('UserAssets', userAssetsSchema)
module.exports = UserAssets
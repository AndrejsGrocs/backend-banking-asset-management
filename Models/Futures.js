const {Schema, model} = require('mongoose')


const userFuturesSchema = new Schema({
    quantityoflots:{type:Number, required:true },
    title:{type:String, required:true},
    ticker:{type:String, required:true },
    
})


const UserFutures = model('UserFutures', userFuturesSchema)
module.exports = UserFutures
const express = require('express')

const userCurrencies = require('../Models/Currencies')
const router = express.Router()



router.post('/create/:currency_id', async(req,res)=>{
    const {body, params} = req
    try{
        const addCurrency = await userCurrencies.create({
    quantityoflots:body.quantityoflots,
    title:body.title,
    ticker:body.ticker,
    countryofissuer:body.countryofissuer,
    isreservecurrency: body.isreservecurrency,
        })

        const currency = await findByIdAndUpdate(params['currency_id'], {
        $push: {listofassets: addAsset._id}}
        )
    }
})






module.exports = router
const express = require('express')

const userCurrencies = require('../Models/Currencies')
const router = express.Router()



router.post('/create/', async(req,res)=>{
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
        $push: {currencies: addCurrency._id}
    })
    return res.status(200).json(addCurrency)
    } catch(error){
        return res.status(404).send('Currency data is not valid')
    }
})


router.get('/currency/:_id', async(req, res)=>{
       const {params} = req
    

    try{
        const currency= await userCurrencies.findById({'_id':params._id}).populate()
        return res.status(200).json(currency)
    } catch(error){
        console.log(error)
        return res.status(404).send('Currency data is not valid')
    }


})

router.delete('/delete/:id', async(req, res)=>{
    try {
        const currencies = await userCurrencies.findByIdAndDelete(req.params.id)

        if(!currencies){
            return res.status(404).json('Currencies not found')
        }

        return res.status(200).json(currencies)
    } catch(error){
        return res.status(500).json({message:'Error', error:error})
    }
})




module.exports = router
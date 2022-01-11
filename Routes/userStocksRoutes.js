const express = require('express')

const userStocks = require('../Models/Stocks')
const router = express.Router()

router.post('/create/', async(req,res)=>{
    const {body, params} = req
    try{
        const addStocks = await userStocks.create({
        quantityoflots:body.quantityoflots,
        title:body.title,
        ticker:body.ticker,
        issuer:body.issuer,
        stockstype:body.stockstype 
        })

        const stock = await findByIdAndUpdate(params['stock_id'], {
        $push: {stocks: addStocks._id}
    })
    return res.status(200).json(addStocks)
    } catch(error){
        return res.status(404).send('Stocks data is not valid')
    }
})


router.get('/stock/:_id', async(req, res)=>{
       const {params} = req
    

    try{
        const stock= await userStocks.findById({'_id':params._id}).populate()
        return res.status(200).json(stock)
    } catch(error){
        console.log(error)
        return res.status(404).send('Stocks data is not valid')
    }


})


router.delete('/delete/:id', async(req, res)=>{
    try {
        const stocks = await userStocks.findByIdAndDelete(req.params.id)

        if(!stocks){
            return res.status(404).json('Stocks not found')
        }

        return res.status(200).json(stocks)
    } catch(error){
        return res.status(500).json({message:'Error', error:error})
    }
})

module.exports = router
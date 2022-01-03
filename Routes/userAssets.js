const express = require('express')
const userAssets = require('../Models/UserAssets')

const router = express.Router()


router.post('/create', async (req,res)=>{
    const {body} = req
    try {
        const addAsset = await userAssets.create({
             currencies:body.currencies,
             stocks: body.stocks,
             bonds: body.bonds,
             etf: body.etf,
             commodities: body.commodities,
             futures: body.futures
            

        })
        return res.status(200).json(addAsset)
    } catch(error){
        return res.status(404).send('Data is not valid')
    }
    
})


module.exports = router
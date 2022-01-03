const express = require('express')
const UserAssets = require('../Models/UserAssets')
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

router.patch('/update/:id', async(req, res)=>{

    try{
        const asset = await UserAssets.findByIdAndUpdate(req.params.id,{
             currencies: req.body.currencies,
             stocks: req.body.stocks,
             bonds: req.body.bonds,
             etf: req.body.etf,
             commodities: req.body.commodities,
             futures: req.body.futures,
        },{new:true})
         if(!asset){
             return res.status(404).json('Asset not found')
             
         }
         return res.status(200).json({updatedAsset:asset})
       }catch(error){
           return res.status(500).json({message:'Error', error:error})
           console.log(error)
       }
})






module.exports = router
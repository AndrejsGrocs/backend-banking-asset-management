const express = require('express')


const userAssets = require('../Models/UserAssets')
const userData = require('../Models/UserData')

const router = express.Router()


router.post('/create/:user_id', async (req,res)=>{
    const {body, params} = req
    try {
        const addAsset = await userAssets.create({
             currencies:body.currencies,
             stocks: body.stocks,
             bonds: body.bonds,
             etf: body.etf,
             commodities: body.commodities,
             futures: body.futures
        })

        

        const user = await userData.findByIdAndUpdate(params["user_id"], {
            $push: { listofassets: addAsset._id }
        });
        return res.status(200).json(addAsset)
    } catch(error){
        return res.status(404).send('Data is not valid')
    }
    
})

router.patch('/update/:id', async(req, res)=>{

    try{
        const asset = await userAssets.findByIdAndUpdate(req.params.id,{
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
           return res.status(500).json('505 Data is not valid')
           console.log(error)
       }
})


router.get('/userassets/:_id', async(req, res)=>{
      
    const {params} = req
    

    try{
        const assets= await userAssets.findById({'_id':params._id}).populate()
        return res.status(200).json(assets)
    } catch(error){
        console.log(error)
        return res.status(404).send('Assets data is not valid')
    }

})
  

router.delete('/delete/:id', async(req, res)=>{
    try {
        const assets = await userAssets.findByIdAndDelete(req.params.id)

        if(!assets){
            return res.status(404).json('Assets not found')
        }

        return res.status(200).json(assets)
    } catch(error){
        return res.status(500).json({message:'Error', error:error})
    }
})

module.exports = router




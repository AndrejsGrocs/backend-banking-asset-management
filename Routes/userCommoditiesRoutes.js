const express = require('express')

const userCommodities = require('../Models/Commodities')
const router = express.Router()

router.post('/create/', async(req,res)=>{
    const {body, params} = req
    try{
        const addCommodities = await userCommodities.create({
        quantityoflots:body.quantityoflots,
        title:body.title,
        ticker:body.ticker,
       
        })

       /*  const bond = await userCommodities.findByIdAndUpdate(params['commodities_id'], {
        $push: {commodities: addCommodities._id}
    }) */
    return res.status(200).json(addCommodities)
    } catch(error){
        return res.status(404).send('Commodities data is not valid')
    }
})


router.get('/commodity/:_id', async(req, res)=>{
       const {params} = req
    

    try{
        const commodity= await userCommodities.findById({'_id':params._id}).populate()
        return res.status(200).json(commodity)
    } catch(error){
        console.log(error)
        return res.status(404).send('Commodities data is not valid')
    }


})


router.delete('/delete/:id', async(req, res)=>{
    try {
        const commodities = await userCommodities.findByIdAndDelete(req.params.id)

        if(!commodities){
            return res.status(404).json('Bonds not found')
        }

        return res.status(200).json(commodities)
    } catch(error){
        return res.status(500).json({message:'Error', error:error})
    }
})

module.exports = router
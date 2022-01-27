const express = require('express')

const userFutures = require('../Models/Futures')
const router = express.Router()

router.post('/create/', async(req,res)=>{
    const {body, params} = req
    try{
        const addFutures = await userFutures.create({
        quantityoflots:body.quantityoflots,
        title:body.title,
        ticker:body.ticker,
       
        })

       /*  const bond = await userCommodities.findByIdAndUpdate(params['commodities_id'], {
        $push: {commodities: addCommodities._id}
    }) */
    return res.status(200).json(addFutures)
    } catch(error){
        return res.status(404).send('Futures data is not valid')
    }
})


router.get('/future/:_id', async(req, res)=>{
       const {params} = req
    

    try{
        const future = await userFutures.findById({'_id':params._id}).populate()
        return res.status(200).json(future)
    } catch(error){
        console.log(error)
        return res.status(404).send('Futures data is not valid')
    }


})


router.delete('/delete/:id', async(req, res)=>{
    try {
        const futures = await userFutures.findByIdAndDelete(req.params.id)

        if(!futures){
            return res.status(404).json('Bonds not found')
        }

        return res.status(200).json(futures)
    } catch(error){
        return res.status(500).json({message:'Error', error:error})
    }
})

module.exports = router
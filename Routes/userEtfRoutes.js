const express = require('express')

const userEtfs = require('../Models/Etf')
const router = express.Router()



router.post('/create/', async(req,res)=>{
    const {body, params} = req
    try{
        const addEtf = await userEtfs.create({
    quantityoflots:body.quantityoflots,
    title:body.title,
    ticker:body.ticker,
    countryorregion:body.countryorregion,
    etftype: body.etftype,
        })

        const currency = await findByIdAndUpdate(params['etf_id'], {
        $push: {etfs: addEtf._id}
    })
    return res.status(200).json(addEtf)
    } catch(error){
        return res.status(404).send('Etf data is not valid')
    }
})


router.get('/etf/:_id', async(req, res)=>{
       const {params} = req
    

    try{
        const etf= await userEtfs.findById({'_id':params._id}).populate()
        return res.status(200).json(etf)
    } catch(error){
        console.log(error)
        return res.status(404).send('Etf data is not valid')
    }


})

router.delete('/delete/:id', async(req, res)=>{
    try {
        const etfs = await userEtfs.findByIdAndDelete(req.params.id)

        if(!etfs){
            return res.status(404).json('Currencies not found')
        }

        return res.status(200).json(etfs)
    } catch(error){
       
        return res.status(500).json({message:'Error', error:error})
        
    }
})




module.exports = router
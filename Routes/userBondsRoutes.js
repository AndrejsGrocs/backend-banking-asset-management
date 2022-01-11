const express = require('express')

const userBonds = require('../Models/Bonds')
const router = express.Router()

router.post('/create/', async(req,res)=>{
    const {body, params} = req
    try{
        const addBonds = await userBonds.create({
        quantityoflots:body.quantityoflots,
        title:body.title,
        ticker:body.ticker,
        issuer:body.issuer,
        bondstype:body.bondstype 
        })

        const bond = await findByIdAndUpdate(params['bond_id'], {
        $push: {bonds: addBonds._id}
    })
    return res.status(200).json(addBonds)
    } catch(error){
        return res.status(404).send('Bonds data is not valid')
    }
})


router.get('/bond/:_id', async(req, res)=>{
       const {params} = req
    

    try{
        const bond= await userBonds.findById({'_id':params._id}).populate()
        return res.status(200).json(bond)
    } catch(error){
        console.log(error)
        return res.status(404).send('Bonds data is not valid')
    }


})


router.delete('/delete/:id', async(req, res)=>{
    try {
        const bonds = await userBonds.findByIdAndDelete(req.params.id)

        if(!bonds){
            return res.status(404).json('Bonds not found')
        }

        return res.status(200).json(bonds)
    } catch(error){
        return res.status(500).json({message:'Error', error:error})
    }
})

module.exports = router
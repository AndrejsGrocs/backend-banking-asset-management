const express = require('express')

const userData = require('../Models/UserData')
const userAssets = require('../Models/UserAssets')


const router = express.Router()

router.post('/create', async (req,res)=>{
    const {body} = req
    try {
        const addUser = await userData.create({
            firstname: body.firstname,
            lastname: body.lastname,
            id: body.id,
            currency: body.currency,
            accountmoneyamount: body.accountmoneyamount,
            country: body.country,
            portfoliotype: body.portfoliotype,
            listofassets: body.listofassets

        })
        return res.status(200).json(addUser)
    } catch(error){
        return res.status(404).send('Data is not valid')
    }
    
})


router.get('/userdata/:_id', async(req,res)=>{
         

      const {params} = req
     
      try{
         const data = await userData.findById({'_id': params._id})
         return res.status(200).send(data) 
     } catch(error) {
         console.log(error)
         return res.status(404).send('Data is not valid')
     }


})


module.exports = router
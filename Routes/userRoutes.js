const express = require('express')

const UserData = require('../Models/UserData')


const router = express.Router()

router.post('/create', async (req,res)=>{
    const {body} = req
    try {
        const addUser = await UserData.create({
            firstname: body.firstname,
            lastname: body.lastname,
            id: body.id,
            currency: body.currency,
            accountmoneyamount: body.accountmoneyamount,
            country: body.country,
            portfoliotype: body.portfoliotype,
            ///listofassets: body.listofassets

        })
        return res.status(200).json(addUser)
    } catch(error){
        return res.status(404).send('Data is not valid')
    }
    
})


module.exports = router
const express = require('express')

const userData = require('../Models/UserData')
const userAssets = require('../Models/UserAssets')
const controller = require('./../controllers/userController')
const passport = require("passport");

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
          console.log(error)
        return res.status(404).send('Data is not valid')
        
       
    }
    
})


router.get('/userdata/:_id', async(req,res)=>{
         

      const {params} = req
     
      try{
         const data = await userData.findById({'_id': params._id}).populate({path:'listofassets', populate:{path:'currencies',model:'UserCurrencies'} }).populate({path:'listofassets', populate:{path:'stocks',model:'UserStocks'} }).populate({path:'listofassets', populate:{path:'bonds',model:'Bonds'} }).populate({path:'listofassets', populate:{path:'etf',model:'UserEtf'} })
         
         /* .populate({path:'listofassets', populate:{path:'stocks', model:'UserStocks'}}) */
         return res.status(200).send(data) 
     } catch(error) {
         console.log(error)
         return res.status(404).send('Data is not valid')
     }


})


router.patch('/update/:id', async(req, res)=>{

    try{
        const user = await userData.findByIdAndUpdate(req.params.id,{
             firstname: req.body.firstname,
             lastname: req.body.lastname,
             id: req.body.id,
             currency: req.body.currency,
             accountmoneyamount: req.body.accountmoneyamount,
             country: req.body.country,
             portfoliotype: req.body.portfoliotype,
             listofassets: req.body.listofassets,
        },{new:true})
         if(!user){
             return res.status(404).json('User not found')
             
         }

         return res.status(200).json({updatedUser:user})
       }catch(error){
           return res.status(500).json('505 Data is not valid')
           console.log(error)
       }
})


router.put('/edituser/:userDataId/:userAssetsId', async(req,res)=>{
    const {userDataId, userAssetsId} = req.params

    try{
        const user = await userData.findById(userDataId)
        const newAsset  = await userAssets.findById(userAssetsId)
        user.listofassets.push(newAsset)
        user.save()
        return res.status(200).send(user)
    } catch(error){
        console.log(error)
        return res.status(404).send('User Data is not valid')
    } 
})

router.delete('/delete/:id', async(req, res)=>{
    try {
        const user = await userData.findByIdAndDelete(req.params.id)

        if(!user){
            return res.status(404).json('User not found')
        }

        return res.status(200).json(user)
    } catch(error){
        return res.status(500).json({message:'Error', error:error})
    }
})


router.post('/register', controller.registerUser)
router.post('/login', controller.login)

router.get('/logout', controller.logout)
router.use(passport.authenticate('jwt', {session:false}))

module.exports = router
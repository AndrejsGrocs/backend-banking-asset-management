const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const userRouter = require('./Routes/userRoutes')
const assetsRouter = require('./Routes/userAssetsRoutes')
const currenciesRouter = require('./Routes/userCurrenciesRoutes')
const stocksRouter = require('./Routes/userStocksRoutes')


const app = express()


dotenv.config()
app.use(express.json())
app.use(cors())


app.use('/api/users' , userRouter)
app.use('/api/assets', assetsRouter)
app.use('/api/assets/currencies', currenciesRouter )
app.use('/api/assets/stocks', stocksRouter )


mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
)
.then(()=>console.log('Connection successful'))
.catch(()=>console.log('Connection failed'))

app.listen(3001, ()=>console.log('The server is listening'))
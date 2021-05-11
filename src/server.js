require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const {connect} = require('./db')
const userRouter = require('./routes/user')
const clientRouter = require('./routes/client')
const restaurantRouter = require('./routes/restaurant')
const proteinRouter = require('./routes/protein')
const carbohydrateRouter = require('./routes/carbohydrate')
const vegetableRouter = require('./routes/vegetable')
const drinkRouter = require('./routes/drink')

const port = process.env.PORT
const app = express()
connect()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/users', userRouter)
app.use('/clients', clientRouter)
app.use('/restaurants', restaurantRouter)
app.use('/proteins', proteinRouter)
app.use('/carbohydrates', carbohydrateRouter)
app.use('/vegetables', vegetableRouter)
app.use('/drinks', drinkRouter)


app.listen(port, () =>{
  console.log(`App running at http://localhost:${port}`)
})

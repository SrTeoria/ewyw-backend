require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const {connect} = require('./db')
const userRouter = require('./routes/user')
const clientRouter = require('./routes/client')
const restaurantRouter = require('./routes/restaurant')
const foodRouter = require('./routes/food')

const port = process.env.PORT
const app = express()
connect()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/users', userRouter)
app.use('/clients', clientRouter)
app.use('/restaurants', restaurantRouter)
app.use('/foods', foodRouter)


app.listen(port, () =>{
  console.log(`App running at http://localhost:${port}`)
})

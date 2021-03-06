const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const Client = require('../models/client.model')
const Restaurant = require('../models/restaurant.model')

module.exports = {
  async signup(req, res){
    try {
      const { email, password, name, userType, direction, phone } = req.body
      const user = await User.create({email, password})
      if ( userType === 'restaurant' ){
        const restaurant = await Restaurant.create({ name, direction, phone, user: user._id })
        user.restaurandId = restaurant._id
        await user.save({ validateBeforeSave: false })
      } else if ( userType === 'client'){
        const client = await Client.create({ name, direction, phone, user: user._id})
        user.clientId = client._id
        await user.save({ validateBeforeSave: false })
      } else {
        throw Error('Tipo de usuario incorrecto')
      }

      const token = jwt.sign(
        {
          userId: user._id,
          userTypeId: user.restaurantId ? user.restaurantId : user.clientId,
          userType: user.restaurantId ? 'restaurant' : 'client'
        },
        process.env.SECRET,
        { expiresIn: 60*60 }
      )
      const userKind = user.restaurandId ? 'restaurant' : 'client'
      res.status(201).json({token, userKind})
    } catch(error){
      res.status(400).json({error:error.message})
    }
  },
  async signin(req, res){
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })

      if(!user){
        throw Error('El correo del usuario es invalido')
      }

      const isValid = await bcrypt.compare(password, user.password)

      if(!isValid){
        throw Error('Contraseña invalida')
      }

      const token = jwt.sign(
        {
          userId: user._id,
          userTypeId: user.restaurandId ? user.restaurandId : user.clientId,
          userType: user.restaurandId ? 'restaurant' : 'client'
        },
        process.env.SECRET,
        { expiresIn: 60*60 }
      )

      const userKind = user.restaurandId ? 'restaurant' : 'client'
      res.status(201).json({token, userKind})
    } catch(error){
      res.status(401).json({message: error.message})
    }
  }
}
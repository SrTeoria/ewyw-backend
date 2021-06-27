const Restaurant = require('../models/restaurant.model')

module.exports = {
  async list(req, res){
    try {
      const { query } = req
      const restaurants = await Restaurant.find(query)

      res.status(201).json(restaurants)
    } catch(error){
      res.status(400).json(`No se puede encontrar el restaurante ${error}`)
    }
  },
  async update(req, res){
    try {
      const { body, user: {userTypeId}} = req
      const restaurant = await Restaurant.findByIdAndUpdate(userTypeId, body, { new: true})

      res.status(201).json(restaurant)
    } catch(error) {
      res.status(400).json({message: 'No se pudo actualizar el restaurante', error})
    }
  },
  async getRestaurant(req, res){
    try {
      const { user: { userTypeId } } = req
      const restaurant = await Restaurant.findById(userTypeId)

      res.status(201).json(restaurant)
    } catch(error){
      res.status(400).json({message: 'No se pudo obtener los datos del restaurante'}, error)
    }
  },
  async getRestaurantPublic(req, res){
    try {
      const { params: { restaurantId } } = req
      const restaurant = await Restaurant.findById(restaurantId)

      res.status(201).json({message: 'Restaurante cargado con exito', restaurant})
    } catch(error){
      // res.status(400).json({message: 'No se pudo obtener la informacion del restaurante'}, error)
    }
  }

}
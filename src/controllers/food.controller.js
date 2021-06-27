const Food = require("../models/food.model")

module.exports = {
  async createFood(req, res){
    try {
      const { foodName, foodCategory, types: {foodLabel, foodPrice} } = req.body
      const { user: {userTypeId}} = req

      const food = await Food.create({foodName, foodCategory, types: {foodLabel, foodPrice}, restaurantId: userTypeId})

      res.status(201).json({food})
    } catch(error){
      res.status(400).json({error: error.message})
    }
  },
  async list(req, res){
    try {
      const { params: { restaurantId } } = req
      const foods = await Food.find({ restaurantId: restaurantId})

      res.status(201).json(foods)
    } catch(error){
      res.status(400).json(`No se puede encontrar los alimentos ${error}`)
    }
  },
  async update(req, res){
    try {
      const { body, params: { foodId } } = req
      const food = await Food.findByIdAndUpdate(foodId, {$push: body}, {new: true})

      res.status(201).json({message: 'Alimento actualizado con exito', food})
    } catch(error){
      res.status(400).json({message: 'No se pudo actualizar el alimento', error})
    }
  }
}
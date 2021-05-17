const Food = require("../models/food.model")

module.exports = {
  async createFood(req, res){
    try {
      const { foodType, foodName, foodCut, foodPreparation, foodQuantity, foodPrice} = req.body

      const food = await Food.create({foodType, foodName, foodCut, foodPreparation, foodQuantity, foodPrice})

      res.status(201).json({food})
    } catch(error){
      res.status(400).json({error: error.message})
    }
  },
  async list(req, res){
    try {
      const { query } = req
      const foods = await Food.find(query)

      res.status(201).json(foods)
    } catch(error){
      res.status(400).json(`No se puede encontrar los alimentos ${error}`)
    }
  },
  async update(req, res){
    try {
      const { body, params: { foodId } } = req
      const food = await Drink.findByIdAndUpdate(foodId, {$push: {foodId: body.foodId}}, {new: true})

      res.status(201).json({message: 'Alimento actualizado con exito', food})
    } catch(error){
      res.status(400).json({message: 'No se pudo actualizar el alimento', error})
    }
  }
}
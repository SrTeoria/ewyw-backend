const Drink = require('../models/drink.model')

module.exports = {
  async createDrink(req, res){
    try {
      const { body } = req
      const drink = await Drink.create(body)

      res.status(201).json({ drink })
    } catch(error){
      res.status(400).json({ error })
    }
  },
  async update(req, res){
    try {
      const { body, params: { drinkId } } = req
      const drink = await Drink.findByIdAndUpdate(drinkId, {$push: {restaurantId: body.restaurantId}}, {new: true})

      res.status(201).json({message: 'Bebida actualizada con exito', drink})
    } catch(error){
      res.status(400).json({message: 'No se pudo actualizar la bebida', error})
    }
  },
  async list(req, res){
    try {
      const { query } = req
      const drinks = await Drink.find(query)

      res.status(201).json(drinks)
    } catch(error){
      res.status(400).jon(error)
    }
  }
}
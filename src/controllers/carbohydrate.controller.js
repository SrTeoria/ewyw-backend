const Carbohydrate = require('../models/carbohydrate.model')

module.exports = {
  async createCarbohydrate(req, res){
    try {
      const { body } = req
      const carbohydrate = await Carbohydrate.create(body)

      res.status(201).json({ carbohydrate })
    } catch(error){
      res.status(400).json({ error })
    }
  },
  async update(req, res){
    try {
      const { body, params: { carbohydrateId } } = req
      const carbohydrate = await Carbohydrate.findByIdAndUpdate(carbohydrateId, {$push: {restaurantId: body.restaurantId}}, {new: true})

      res.status(201).json({message: 'Carbohidrato actualizada con exito', carbohydrate})
    } catch(error){
      res.status(400).json({message: 'No se pudo actualizar el carbohidrato', error})
    }
  },
  async list(req, res){
    try {
      const { query } = req
      const carbohydrates = await Carbohydrate.find(query)

      res.status(201).json(carbohydrates)
    } catch(error){
      res.status(400).jon(error)
    }
  }
}
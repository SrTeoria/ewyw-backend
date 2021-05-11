const Vegetable = require('../models/vegetable.model')

module.exports = {
  async createVegetable(req, res){
    try {
      const { body } = req
      const vegetable = await Vegetable.create(body)

      res.status(201).json({ vegetable })
    } catch(error){
      res.status(400).json({ error })
    }
  },
  async update(req, res){
    try {
      const { body, params: { vegetableId } } = req
      const vegetable = await Vegetable.findByIdAndUpdate(vegetableId, {$push: {restaurantId: body.restaurantId}}, {new: true})

      res.status(201).json({message: 'Verdura actualizada con exito', vegetable})
    } catch(error){
      res.status(400).json({message: 'No se pudo actualizar la verdura', error})
    }
  },
  async list(req, res){
    try {
      const { query } = req
      const vegetable = await Vegetable.find(query)

      res.status(201).json(vegetable)
    } catch(error){
      res.status(400).jon(error)
    }
  }
}
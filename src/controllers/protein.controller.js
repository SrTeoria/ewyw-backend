const Protein = require('../models/protein.model')

module.exports = {
  async createProtein(req, res){
    try {
      const { body } = req
      const protein = await Protein.create(body)

      res.status(201).json({ protein })
    } catch(error){
      res.status(400).json({ error })
    }
  },
  async update(req, res){
    try {
      const { body, params: { proteinId } } = req
      const protein = await Protein.findByIdAndUpdate(proteinId, {$push: {restaurantId: body.restaurantId}}, {new: true})

      res.status(201).json({message: 'Proteina actualizada con exito', protein})
    } catch(error){
      res.status(400).json({message: 'No se pudo actualizar la proteina', error})
    }
  },
  async list(req, res){
    try {
      const { query } = req
      const proteins = await Protein.find(query)

      res.status(201).json(proteins)
    } catch(error){
      res.status(400).jon(error)
    }
  }
}
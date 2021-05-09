const Client = require('../models/client.model')


module.exports = {
  async list(req, res){
    try {
      const { query } = req
      const client = await Client.find(query)

      res.status(201).json(client)
    } catch(error){
        res.status(400).json(`No se puede encontrar el cliente ${error}`)
    }
  },
  async update(req, res){
    try {
      const {body, user: { userTypeId }} = req
      const client = await Client.findByIdAndUpdate(userTypeId, body, { new: true })

      res.status(201).json(client)
    } catch(error) {
      res.status(400).json(`No se puede actualizar el cliente ${error}`)
    }
  },
  async getClient(req, res){
    try {
      const { user: { userTypeId} } = req
      const client = await Client.findById(userTypeId)

      res.status(201).json({message: 'Cliente cargado con exito', client})
    } catch(error){
      res.status(400).json({message: 'No se pudo cargar los datos del cliente', error})
    }
  }
}
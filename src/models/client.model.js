const { model, Schema } = require('mongoose')

const clientSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
  },
  phone: {
    type: String,
  }
}, {
  timestamps: true,
})

const Client = model('Client', clientSchema)

module.exports = Client
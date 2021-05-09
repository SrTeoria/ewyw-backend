const { model, Schema } = require('mongoose')

const restaurantSchema = new Schema({
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

const Restaurant = model('Restaurant', restaurantSchema)

module.exports = Restaurant
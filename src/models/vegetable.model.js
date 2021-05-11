const { model, Schema } = require('mongoose')

const vegetableSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  restaurantId: [{
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
    },
  ],
}, {
  timestamps: true,
})

const Vegetable = model('Vegetable', vegetableSchema)

module.exports = Vegetable
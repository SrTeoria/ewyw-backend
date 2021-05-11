const { model, Schema } = require('mongoose')

const drinkSchema = new Schema({
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

const Drink = model('Drink', drinkSchema)

module.exports = Drink
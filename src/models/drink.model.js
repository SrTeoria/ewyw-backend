const { model, Schema } = require('mongoose')

const drinkSchema = new Schema({
  foodType: {
    type: String,
  },
  foodName: {
    type: String,
    require: true,
  },
  restaurantId: [{
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
    },
  ],
  foodQuantity: [{
    type: String,
    enum: ['1', '2', '3'],
    maxLength: 3,
  }],
  foodPrice: [{
    type: String,
  }],
}, {
  timestamps: true,
})

const Drink = model('Drink', drinkSchema)

module.exports = Drink
const { model, Schema } = require('mongoose')

const foodSchema = new Schema({
  foodType: {
    type: String,
  },
  foodName: {
    type: String,
  },
  restaurantId: [{
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
    },
  ],
  foodCut: [{
    type: String,
  }],
  foodPreparation: [{
    type: String,
  }],
  foodQuantity: [{
    type: String,
    enum: ['100gr', '200gr', '300gr'],
  }],
  foodPrice: [{
    type: String,
  }],

}, {
  timestamps: true,
})

const Food = model('Food', foodSchema)

module.exports = Food
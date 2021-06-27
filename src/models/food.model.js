const { model, Schema } = require('mongoose')

const typesSchema = new Schema({
  foodLabel: {
    type: String,
  },
  foodPrice: {
    type: String,
  },
})

const foodSchema = new Schema({

  foodName: {
    type: String,
  },
  foodCategory: {
    type: String,
  },
  types: {
    type: [typesSchema]
  },
  restaurantId: [{
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
    },
  ],
}, {
  timestamps: true,
})

const Food = model('Food', foodSchema)

module.exports = Food
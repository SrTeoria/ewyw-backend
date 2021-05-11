const { model, Schema } = require('mongoose')

const carbohydrateSchema = new Schema({
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

const Carbohydrate = model('Carbohydrate', carbohydrateSchema)

module.exports = Carbohydrate
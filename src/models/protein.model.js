const { model, Schema } = require('mongoose')

const proteinSchema = new Schema({
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

const Protein = model('Protein', proteinSchema)

module.exports = Protein
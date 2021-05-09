const router = require('express').Router()
const { list, update, getRestaurant } = require('../controllers/restaurant.controller')

router.route('/').get(list)
router.route('/restaurant').get(getRestaurant)
router.route('restaurantprofile').put(update)

module.exports = router
const router = require('express').Router()
const { list, update, getRestaurant, getRestaurantPublic } = require('../controllers/restaurant.controller')
const { auth } = require('../utils/auth')

router.route('/').get(list)
router.route('/restaurant').get(auth, getRestaurant)
router.route('/restaurant/:restaurantId').get(auth, getRestaurantPublic)
router.route('/restaurantprofile').put(auth, update)

module.exports = router
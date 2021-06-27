const router = require('express').Router()
const { createFood, list, update } = require('../controllers/food.controller')
const { auth } = require('../utils/auth')

router.route('/createFood').post(auth, createFood)
router.route('/:restaurantId').get(list)
router.route('/:foodId').put(auth, update)


module.exports = router
const router = require('express').Router()
const { createFood, list, update } = require('../controllers/food.controller')

router.route('/createFood').post(createFood)
router.route('/').get(list)
router.route('/:foodId').put(update)


module.exports = router
const router = require('express').Router()
const { list, update, createDrink } = require('../controllers/drink.controller')

router.route('/createDrink').post(createDrink)
router.route('/:drinkId').put(update)
router.route('/').get(list)


module.exports = router
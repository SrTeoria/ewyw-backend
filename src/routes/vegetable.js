const router = require('express').Router()
const { list, update, createVegetable } = require('../controllers/vegetable.controller')

router.route('/createVegetable').post(createVegetable)
router.route('/:vegetableId').put(update)
router.route('/').get(list)


module.exports = router
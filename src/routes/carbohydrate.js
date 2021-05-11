const router = require('express').Router()
const { list, update, createCarbohydrate } = require('../controllers/carbohydrate.controller')

router.route('/createCarbohydrate').post(createCarbohydrate)
router.route('/:carbohydrateId').put(update)
router.route('/').get(list)


module.exports = router
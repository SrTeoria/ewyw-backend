const router = require('express').Router()
const { list, update, createProtein } = require('../controllers/protein.controller')

router.route('/createProtein').post(createProtein)
router.route('/:proteinId').put(update)
router.route('/').get(list)


module.exports = router
const router = require('express').Router()
const { list, update, getClient } = require('../controllers/client.controller')

router.route('/').get(list)
router.route('/client').get(getClient)
router.route('clientprofile').put(update)

module.exports = router
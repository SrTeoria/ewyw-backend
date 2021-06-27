const router = require('express').Router()
const { list, update, getClient } = require('../controllers/client.controller')
const { auth } = require("../utils/auth")

router.route('/').get(list)
router.route('/client').get(auth, getClient)
router.route('/clientprofile').put(auth, update)

module.exports = router
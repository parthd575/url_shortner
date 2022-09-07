const router = require('express').Router()
const ctrl = require('../controllers/home')

router.get('/', ctrl.homepage)

router.get('/short_link/:url', ctrl.redirect)

router.post('/create_short_link', ctrl.create_url)

module.exports = router
const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/users')

router.get('/ekstras', usercontroller.index)

router.get('/ekstra/:id', usercontroller.show)

  router.post('/ekstra', usercontroller.store)
  
  router.put('/ekstra/:id', usercontroller.update)
  
  router.delete('/ekstra/:id', usercontroller.delete)

  module.exports = router
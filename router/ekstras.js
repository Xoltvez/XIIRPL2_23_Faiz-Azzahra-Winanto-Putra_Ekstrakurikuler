const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/ekstras')

router.get('/SemuaEkstra', usercontroller.index)

router.get('/ekstra/:id', usercontroller.show)

  router.post('/TambahEkstra', usercontroller.store)
  
  router.put('/UbahEkstra/:id', usercontroller.update)
  
  router.delete('/HapusEkstra/:id', usercontroller.delete)

  module.exports = router
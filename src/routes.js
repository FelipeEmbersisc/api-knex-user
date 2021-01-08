const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes
  .get('/users', UserController.index)
  .post('/users', UserController.create)

module.exports = routes
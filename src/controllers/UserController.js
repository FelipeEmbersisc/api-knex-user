const { json } = require('express')
const knex = require('../database')

module.exports = {

  async index(req, res, next) {
    try {
      const results = await knex('users')
        .where('deleted_at', null)

      return res.json(results)
    } catch (error) {
      next(error)
    }
  },
  async create(req, res, next) {
    try {
      const { name, username, email } = req.body

      await knex ('users').insert({
        name,
        username,
        email
      })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  }

}
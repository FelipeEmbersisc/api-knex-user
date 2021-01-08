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
  },
  async update(req, res, next) {
    try {
      const { name, username, email } = req.body
      const { id } = req.params

      await knex('users')
      .update({ name, username, email })
      .where({ id })

      return res.send()
    } catch (error) {
      next(error)
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params

      await knex('users')
      .update('deleted_at', new Date())
      .where({ id })

      return res.send()
    } catch (error) {
      next(error)
    }
  }

}

exports.up = async knex => knex.schema.createTable('users', table => {
  table.increments('id')
  table.text('name').notNullable()
  table.text('username').unique().notNullable()
  table.text('email').notNullable()

  table.timestamps(true, true)
})

exports.down = async knex => knex.schema.dropTable('users')

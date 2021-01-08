
exports.up = async knex => knex.schema.createTable('users', table => {
  table.increments('id')
  table.text('name').notNullable()
  table.text('username').unique().notNullable()
  table.text('email').notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
  table.timestamp('deleted_at')
})

exports.down = async knex => knex.schema.dropTable('users')

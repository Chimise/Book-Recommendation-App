/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.string('password_reset_token', 200);
    table.timestamp('password_reset_expires');
    table.boolean('email_verified').defaultTo(false);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table('users', table => {
    table.dropColumn('password_reset_token').dropColumn('password_reset_expires').dropColumn('email_verified')
  })
};

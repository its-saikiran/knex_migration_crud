/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.
            createTable('mig_students',(table) => {
                table.increments('id');
                table.string('name');
                table.string('email');
                table.string('password')
            })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.
            dropTable('mig_students')
};

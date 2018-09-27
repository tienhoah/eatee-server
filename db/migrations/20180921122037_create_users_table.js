
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('facebook_id');
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('phone', 10);
    table.string('age');
    table.string('sex');
    table.string('city');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

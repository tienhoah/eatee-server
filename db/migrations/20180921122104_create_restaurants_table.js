
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function (table) {
    table.increments();
    table.string('name');
    table.string('address');
    table.string('city');
    table.string('country');
    table.string('phone', 10);
    table.specificType('longitude', 'double precision')
    table.specificType('latitude', 'double precision')
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};

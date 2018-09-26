exports.up = function(knex, Promise) {
  return knex.schema.createTable("restaurants", function(table) {
    table.increments();
    table.string("name");
    table.string("Yelp image URL");
    table.string("Yelp business URL");
    table.decimal("rating", 1, 1);
    table.string("categories");
    table.string("address");
    table.string("city");
    table.string("country");
    table.string("phone", 10);
    table.decimal("longitude", 3, 5);
    table.decimal("latitude", 3, 5);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("restaurants");
};

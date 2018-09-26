exports.up = function(knex, Promise) {
  return knex.schema.createTable("restaurants", function(table) {
    table.increments();
    table.string("name");
    table.string("Yelp_image_URL");
    table.string("Yelp_business_URL");
    table.decimal("rating", 1, 1);
    table.string("categories");
    table.string("address");
    table.string("city");
    table.string("country");
    table.string("phone", 10);
    table.decimal("longitude", 11, 8);
    table.decimal("latitude", 10, 8);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("restaurants");
};

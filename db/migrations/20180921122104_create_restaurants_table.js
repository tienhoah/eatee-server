exports.up = function(knex, Promise) {
  return knex.schema.createTable("restaurants", function(table) {
    table.increments();
    table.string("name");
    table.string("Yelp_image_URL");
    table.string("Yelp_business_URL");
    table.specificType("rating", 'double precision');
    table.string("categories");
    table.string("address");
    table.string("city");
    table.string("country");
    table.string("phone");
    table.string("yelp_id");
    table.specificType("longitude", 'double precision');
    table.specificType("latitude", 'double precision');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("restaurants");
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable("coupon_batches", function(table) {
    table.increments();
    table.string("dish_name");
    table.datetime("timestamp");
    table.integer("time_limit");
    table.string("quantity");
    table.string("image");
    table.float("price");
    table.integer("discount");
    table.integer("impression");
    table.integer("restaurant_id").references("restaurants.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("coupon_batches");
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('coupon_details', function (table) {
    table.increments();
    table.boolean('is_active');
    table.boolean('is_redeemed');
    table.integer('impression');
    table.integer('swipe');
    table.integer('coupon_batch_id').references('coupon_batches.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('coupon_details');
};

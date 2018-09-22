
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coupon_details', function (table) {
    table.increments();
    table.boolean('is_active');
    table.boolean('is_redeemed');
    table.boolean('swipe');
    table.integer('coupon_batch_id').references('coupon_batches.id');
    table.integer('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('coupon_details');
};

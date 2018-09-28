
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coupon_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('coupon_details').insert([
        {is_active: true, is_redeemed: false, swipe: true, coupon_batch_id: 1, user_id: 3 },
        {is_active: true, is_redeemed: false, swipe: true, coupon_batch_id: 1, user_id: 2 },
        {is_active: false, is_redeemed: false, swipe: true, coupon_batch_id: 2, user_id: 6 },
        {is_active: true, is_redeemed: false, swipe: true, coupon_batch_id: 3, user_id: 6 },
        {is_active: true, is_redeemed: false, swipe: true, coupon_batch_id: 2, user_id: 6 },
        {is_active: false, is_redeemed: false, swipe: true, coupon_batch_id: 3, user_id: 7 },
        {is_active: true, is_redeemed: false, swipe: true, coupon_batch_id: 4, user_id: 1 },
        {is_active: true, is_redeemed: false, swipe: true, coupon_batch_id: 4, user_id: 4 },
        {is_active: false, is_redeemed: false, swipe: true, coupon_batch_id: 5, user_id: 10 },
        {is_active: false, is_redeemed: false, swipe: true, coupon_batch_id: 5, user_id: 8 },
        {is_active: true, is_redeemed: false, swipe: true, coupon_batch_id: 6, user_id: 1 },
        {is_active: false, is_redeemed: false, swipe: true, coupon_batch_id: 6, user_id: 3 },
        {is_active: false, is_redeemed: false, swipe: true, coupon_batch_id: 3, user_id: 5 },
        {is_active: false, is_redeemed: false, swipe: true, coupon_batch_id: 2, user_id: 10 },
        {is_active: true, is_redeemed: false, swipe: true, coupon_batch_id: 1, user_id: 8 },
        {is_active: false, is_redeemed: false, swipe: true, coupon_batch_id: 4, user_id: 7 },
        {is_active: true, is_redeemed: false, swipe: false, coupon_batch_id: 1, user_id: null },
        {is_active: true, is_redeemed: false, swipe: false, coupon_batch_id: 1, user_id: null },
        {is_active: true, is_redeemed: false, swipe: false, coupon_batch_id: 2, user_id: null },
        {is_active: true, is_redeemed: false, swipe: false, coupon_batch_id: 3, user_id: null },
      ]);
    });
};

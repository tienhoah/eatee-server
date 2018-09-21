
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coupon_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('coupon_details').insert([
        {is_active: true, is_redeemed: false, impression: 886, swipe: 73, coupon_batch_id: 1 },
        {is_active: true, is_redeemed: false, impression: 454, swipe: 28, coupon_batch_id: 1 },
        {is_active: false, is_redeemed: true, impression: 495, swipe: 416, coupon_batch_id: 2 },
        {is_active: true, is_redeemed: true, impression: 911, swipe: 149, coupon_batch_id: 3 },
        {is_active: true, is_redeemed: false, impression: 417, swipe: 231, coupon_batch_id: 2 },
        {is_active: false, is_redeemed: false, impression: 939, swipe: 283, coupon_batch_id: 3 },
        {is_active: true, is_redeemed: true, impression: 546, swipe: 146, coupon_batch_id: 4 },
        {is_active: true, is_redeemed: false, impression: 879, swipe: 110, coupon_batch_id: 4 },
        {is_active: false, is_redeemed: true, impression: 798, swipe: 63, coupon_batch_id: 5 },
        {is_active: false, is_redeemed: false, impression: 428, swipe: 170, coupon_batch_id: 5 },
        {is_active: true, is_redeemed: false, impression: 348, swipe: 221, coupon_batch_id: 6 },
        {is_active: false, is_redeemed: false, impression: 848, swipe: 620, coupon_batch_id: 6 },
        {is_active: false, is_redeemed: true, impression: 478, swipe: 240, coupon_batch_id: 3 },
        {is_active: false, is_redeemed: false, impression: 908, swipe: 672, coupon_batch_id: 2 },
        {is_active: true, is_redeemed: false, impression: 228, swipe: 70, coupon_batch_id: 1 },
        {is_active: false, is_redeemed: true, impression: 158, swipe: 15, coupon_batch_id: 4 }
      ]);
    });
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("coupon_details")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("coupon_details").insert([
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 1,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 1,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 1,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 1,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 1,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 2,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 2,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 2,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 2,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 3,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 3,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 3,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 3,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 4,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 4,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 4,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 5,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 5,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 5,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 6,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 6,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 6,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 6,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 6,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 6,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 6,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 7,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 7,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 7,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 7,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 8,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 8,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 8,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 9,
          user_facebook_id: null
        },
        {
          is_active: true,
          is_redeemed: false,
          swipe: false,
          coupon_batch_id: 9,
          user_facebook_id: null
        }
      ]);
    });
};

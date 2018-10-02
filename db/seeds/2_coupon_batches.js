exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("coupon_batches")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("coupon_batches").insert([
        {
          dish_name: "Burger & Onion Ring",
          description: "Yummy burger",
          timestamp: new Date("2017-07-18T20:50:53+04:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 5,
          image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7QeS0vT_EKBRbAdGZwqfmg/o.jpg",
          price: 9.99,
          discount: 25,
          impression: 43,
          restaurant_id: 3
        },
        {
          dish_name: "Soy Chicken",
          description: "Yasssss",
          timestamp: new Date("2010-03-09T20:36:59-07:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 4,
          image:
            "https://s3-media2.fl.yelpcdn.com/bphoto/EeCeMhsA04PAscAc5uMPrw/o.jpg",
          price: 13.1,
          discount: 15,
          impression: 22,
          restaurant_id: 1
        },
        {
          dish_name: "Kimchi Fried Rice",
          description: "Delicious and good for your gut",
          timestamp: new Date("2014-01-11T03:54:50+01:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 4,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/Sxp4hcIGvNYwDbulO2MsjA/o.jpg",
          price: 8.99,
          discount: 20,
          impression: 62,
          restaurant_id: 1
        },
        {
          dish_name: "Asian Noodle Salad",
          description: "Asian salad is a juxtaposition",
          timestamp: new Date("2017-06-28T16:16:51+08:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 3,
          image:
            "https://s3-media4.fl.yelpcdn.com/bphoto/Qjz8UJXyr2-fyTUluP1ahg/o.jpg",
          price: 14.99,
          discount: 15,
          impression: 70,
          restaurant_id: 2
        },
        {
          dish_name: "Fish and Chips",
          description: "It's actually just fries. We're in Canada",
          timestamp: new Date("2026-11-28T23:09:56-09:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 3,
          image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/hnIcocHcAkukLivJ4HQW0w/o.jpg",
          price: 12.99,
          discount: 25,
          impression: 24,
          restaurant_id: 2
        },
        {
          dish_name: "Zoo Sticks",
          description: "Fresh from the zoo",
          timestamp: new Date("2022-11-20T06:56:01-08:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 2,
          image:
            "https://s3-media2.fl.yelpcdn.com/bphoto/-Xocuyeu8G8YJLaa97UZ7A/o.jpg",
          price: 7.99,
          discount: 50,
          impression: 79,
          restaurant_id: 2
        }
      ]);
    });
};

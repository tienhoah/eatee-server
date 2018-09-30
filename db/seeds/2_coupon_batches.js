exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("coupon_batches")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("coupon_batches").insert([
        {
          dish_name: "Burger",
          description: "Yummy burger",
          timestamp: new Date("2017-07-18T20:50:53+04:00").toISOString(),
          time_limit: 37,
          quantity: 5,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 72.1203,
          discount: 14,
          impression: 43,
          restaurant_id: 1
        },
        {
          dish_name: "Fries",
          description: "Yummy burger",
          timestamp: new Date("2010-03-09T20:36:59-07:00").toISOString(),
          time_limit: 112,
          quantity: 4,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 13.055,
          discount: 1,
          impression: 22,
          restaurant_id: 2
        },
        {
          dish_name: "Yummy Salad",
          description: "Yummy burger",
          timestamp: new Date("2014-01-11T03:54:50+01:00").toISOString(),
          time_limit: 84,
          quantity: 4,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 92.8963,
          discount: 6,
          impression: 62,
          restaurant_id: 1
        },
        {
          dish_name: "Chicken Nuggets",
          description: "Yummy burger",
          timestamp: new Date("2017-06-28T16:16:51+08:00").toISOString(),
          time_limit: 72,
          quantity: 3,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 67.6934,
          discount: 15,
          impression: 70,
          restaurant_id: 2
        },
        {
          dish_name: "Swarma",
          description: "Yummy burger",
          timestamp: new Date("2026-11-28T23:09:56-09:00").toISOString(),
          time_limit: 19,
          quantity: 2,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 12.0116,
          discount: 22,
          impression: 24,
          restaurant_id: 2
        },
        {
          dish_name: "Candy",
          description: "Yummy burger",
          timestamp: new Date("2022-11-20T06:56:01-08:00").toISOString(),
          time_limit: 35,
          quantity: 2,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 65.3683,
          discount: 19,
          impression: 79,
          restaurant_id: 2
        }
      ]);
    });
};

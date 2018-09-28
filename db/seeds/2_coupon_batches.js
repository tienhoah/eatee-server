exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("coupon_batches")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("coupon_batches").insert([
        {
          name: "Burger",
          description: "Yummm",
          timestamp: new Date("2017-07-18T20:50:53+04:00").toISOString(),
          time_limit: 37,
          quantity: 10,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 72.1203,
          discount: 14,
          impression: 43,
          restaurant_id: 1
        },
        {
          name: "Fries",
          description: "Fat",
          timestamp: new Date("2010-03-09T20:36:59-07:00").toISOString(),
          time_limit: 112,
          quantity: 53,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 13.055,
          discount: 1,
          impression: 22,
          restaurant_id: 2
        },
        {
          name: "Yummy Salad",
          description: "Healthy",
          timestamp: new Date("2014-01-11T03:54:50+01:00").toISOString(),
          time_limit: 84,
          quantity: 17,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 92.8963,
          discount: 6,
          impression: 62,
          restaurant_id: 3
        },
        {
          name: "Chicken Nuggets",
          description: "YAS",
          timestamp: new Date("2017-06-28T16:16:51+08:00").toISOString(),
          time_limit: 72,
          quantity: 83,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 67.6934,
          discount: 15,
          impression: 70,
          restaurant_id: 4
        },
        {
          name: "Swarma",
          description: "Good",
          timestamp: new Date("2026-11-28T23:09:56-09:00").toISOString(),
          time_limit: 19,
          quantity: 83,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/NCX50ST3Hjg7y8wTcwQXog/o.jpg",
          price: 12.0116,
          discount: 22,
          impression: 24,
          restaurant_id: 2
        },
        {
          name: "Candy",
          description: "Sugar",
          timestamp: new Date("2022-11-20T06:56:01-08:00").toISOString(),
          time_limit: 35,
          quantity: 47,
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

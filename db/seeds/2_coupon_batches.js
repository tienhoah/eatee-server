exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("coupon_batches")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("coupon_batches").insert([
        {
          dish_name: "Mediterranean Stuffed Chicken Breast",
          description:
            "mushrooms, goat cheese, olive oil, crushed roasted potatoes, seasonal veggies, cream sauce",
          timestamp: new Date("2017-07-18T20:50:53+04:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 5,
          image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/j-nw5zSww_-qmkIF0dJvXg/o.jpg",
          price: 22,
          discount: 20,
          impression: 43,
          restaurant_id: 1
        },
        {
          dish_name: "Cavo Sangria",
          description: "red or white with seasonal fruit",
          timestamp: new Date("2010-03-09T20:36:59-07:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 4,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/4fL2YMCBOrT5X_fQFtQCaw/o.jpg",
          price: 10,
          discount: 20,
          impression: 22,
          restaurant_id: 1
        },
        {
          dish_name: "Aburi Chirashi Tart",
          description:
            "layers of sushi rice, spicy tuna, avocado, sockeye salmon, Miku sauce, flame seared and topped with prawn, scallop, maguro, tobiko and ikura",
          timestamp: new Date("2014-01-11T03:54:50+01:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 4,
          image:
            "https://s3-media2.fl.yelpcdn.com/bphoto/IB9LAk7giR6ozSKi1U6LPg/o.jpg",
          price: 24,
          discount: 5,
          impression: 62,
          restaurant_id: 2
        },
        {
          dish_name: "Moscow Mule",
          description: "Russian Standard vodka, lime juice and ginger beer",
          timestamp: new Date("2017-06-28T16:16:51+08:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 3,
          image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/ZaZh6c76xdOCeHH0zIZNCw/o.jpg",
          price: 14,
          discount: 15,
          impression: 70,
          restaurant_id: 3
        },
        {
          dish_name: "Matcha Gateaux Chocolate Parfait",
          description: "with agar and matcha pudding",
          timestamp: new Date("2026-11-28T23:09:56-09:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 3,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/XGFxjzPwsWjPazkHZxKcpg/o.jpg",
          price: 9.99,
          discount: 20,
          impression: 24,
          restaurant_id: 4
        },
        {
          dish_name: "Classic Ramen",
          description: "Our signatue Tonkotsu Pork Broth",
          timestamp: new Date("2026-11-28T23:09:56-09:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 7,
          image:
            "https://s3-media2.fl.yelpcdn.com/bphoto/MgpaE4PofVUSrGAREMe03g/o.jpg",
          price: 12.99,
          discount: 20,
          impression: 109,
          restaurant_id: 5
        },
        {
          dish_name: "Chashu Pork & Takana Donburi",
          description: "Please note that Takana is slightly spicy.",
          timestamp: new Date("2026-11-28T23:09:56-09:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 4,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/ha6r3d3w_i5EfpGVdR7IKA/o.jpg",
          price: 12.99,
          discount: 20,
          impression: 49,
          restaurant_id: 5
        },
        {
          dish_name: "Chorizo Quesadilla",
          description: "Comes with Beef Chimichanga, Rice, Beans, & Salad",
          timestamp: new Date("2026-11-28T23:09:56-09:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 3,
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/atUfQfDS1Ijn1chciTfqmQ/o.jpg",
          price: 14.99,
          discount: 40,
          impression: 20,
          restaurant_id: 6
        },
        {
          dish_name: "Lunch Buffet Special",
          description: "Limited time only, applies to all food.",
          timestamp: new Date("2026-11-28T23:09:56-09:00").toISOString(),
          time_limit: new Date("2019-07-18T20:50:53+04:00").toISOString(),
          quantity: 2,
          image:
            "https://s3-media2.fl.yelpcdn.com/bphoto/HX1pOeE78u0tPdXNO1IXXQ/o.jpg",
          price: 14.99,
          discount: 15,
          impression: 90,
          restaurant_id: 7
        }
      ]);
    });
};

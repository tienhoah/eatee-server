"use stricts";

const express = require("express");
const router = express.Router();

// create object to print multiple initial arrays of coupons for a coupon batch
function makeArrays(array, time) {
  let newArray = [];
  for (let i = 0; i < time; i++) {
    newArray.push(array);
  }
  return newArray;
}

module.exports = knex => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("restaurants")
      .then(results => {
        res.json(results);
      });
  });

  router.post("/", (req, res) => {
    knex("restaurants")
      .returning("id")
      .insert({
        name: req.body.name,
        Yelp_image_URL: req.body.Yelp_image_URL,
        Yelp_business_URL: req.body.Yelp_business_URL,
        rating: req.body.rating,
        categories: req.body.categories,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        phone: req.body.phone,
        longitude: req.body.longitude,
        latitude: req.body.latitude
      })
      .then(results => {
        res.json(results);
      });
  });

  //get restaurant id
  router.get("/yelpid/:id", (req, res) => {
    knex
      .select("*")
      .from("restaurants")
      .where({'restaurants.yelp_id':req.params.id})
      .then((results) => {
        res.json(results);
      });
  });

  router.get("/:id/coupon_batches", (req, res) => {
    knex
      .select("*")
      .from("restaurants")
      .join("coupon_batches", {
        "coupon_batches.restaurant_id": "restaurants.id"
      })
      .where({ "coupon_batches.restaurant_id": req.params.id })
      .then(results => {
        if (!results.length) {
          res.json({ error: "Not found" });
        } else {
          res.json(results);
        }
      });
  });

  router.post("/:id/coupon_batches", (req, res) => {
    console.log("connect to router /:id/coupon_batches");
    const {
      dish_name,
      description,
      timestamp,
      time_limit,
      quantity,
      image,
      price,
      discount,
      impression
    } = req.body;

    knex("coupon_batches")
      .returning("*")
      .insert({
        dish_name,
        description,
        timestamp,
        time_limit,
        quantity,
        image,
        price,
        discount,
        impression,
        restaurant_id: req.params.id
      })
      .then(result => {
        knex("coupon_details")
          .returning("*")
          .insert(
            makeArrays(
              {
                is_active: true,
                is_redeemed: false,
                swipe: false,
                coupon_batch_id: result[0].id,
                user_facebook_id: null
              },
              quantity
            )
          )
          .then(results => {
            res.json(results);
          });
      });
  });

  return router;
};

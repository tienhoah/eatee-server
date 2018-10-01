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
        yelp_id: req.body.yelp_id,
        longitude: req.body.longitude,
        latitude: req.body.latitude
      })
      .then(results => {
        res.json(results);
      });
  });

  //get swipe total for a restaurant
  router.get("/:id/swipe", (req,res) => {
    knex
      .count("*")
      .from('coupon_details')
      .join('coupon_batches', 'coupon_details.coupon_batch_id', '=', 'coupon_batches.id')
      .join('restaurants', 'restaurants.id', '=', 'coupon_batches.restaurant_id')
      .where({'restaurants.id':req.params.id})
      .andWhere({'swipe':true})
      .then((results) => {
        if (!results.length) {
          res.json({error: "Not found"});
        } else {
          res.json(results);
        }
      })
  })

  //get impression total for a restaurant
  router.get("/:id/impression", (req,res) => {
    knex
      .sum("impression")
      .from("coupon_batches")
      .join("restaurants", 'coupon_batches.restaurant_id', '=', 'restaurants.id')
      .where({'restaurants.id':req.params.id})
      .then((results) => {
        if (!results.length) {
          res.json({error: "Not found"});
        } else {
          res.json(results);
        }
      })
  })

  //get redeemed total for a restaurant
  router.get("/:id/redeem", (req,res) => {
    knex
      .count("*")
      .from("coupon_details")
      .join('coupon_batches', 'coupon_details.coupon_batch_id', '=', 'coupon_batches.id')
      .join('restaurants', 'restaurants.id', '=', 'coupon_batches.restaurant_id')
      .where({'restaurants.id':req.params.id})
      .andWhere({'is_redeemed':true})
      .then((results) => {
        if (!results.length) {
          res.json({error: "Not found"});
        } else {
          res.json(results);
        }
      })
  })

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

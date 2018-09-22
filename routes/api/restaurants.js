"use stricts";

const express = require('express');
const router = express.Router();

// create object to print multiple initial arrays of coupons for a coupon batch
function makeArrays(array, time) {
  let newArray = []
  for (let i = 0; i < time; i++) {
    newArray.push(array)
  }
  return newArray
}

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("restaurants")
      .then((results) => {
        res.json(results);
      });
  });


  router.get("/:id/coupon_batches", (req, res) => {
    knex
      .select("*")
      .from("restaurants")
      .join('coupon_batches', {'coupon_batches.restaurant_id': 'restaurants.id'})
      .where({'coupon_batches.restaurant_id': req.params.id})
      .then((results) => {
        if (!results.length) {
          res.json({error: "Not found"});
        } else {
          res.json(results);
        }
    });
  });

  router.post("/:id/coupon_batches", (req, res) => {
    const { name, time_limit, quantity, image ,price, discount, impression} = req.body;

    knex("coupon_batches")
      .returning("*")
      .insert({name, timestamp: new Date().toISOString(), time_limit, quantity, image, price, discount, impression, restaurant_id: req.params.id})
      .then((result) => {
        knex("coupon_details")
        .returning("*")
        .insert(makeArrays({is_active: true, is_redeemed: false, swipe: false, coupon_batch_id: result[0].id, user_id: null }, quantity))
        .then((results) => {
          res.json(results);
        });
    });
  });

  return router;
};
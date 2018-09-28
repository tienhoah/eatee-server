"use stricts";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  //select all users
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
      });
  });

  //save user data to database
  router.post("/", (req, res) => {
    knex('users')
    .returning("*")
      .insert({
        facebook_id: req.body.facebook_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        sex: req.body.sex,
        age: req.body.age,
        city: req.body.city,
      }).then((results) => {
        res.json(results);
      });
  });

  //get user facebook id
  router.get("/fbid/:id", (req, res) => {
    knex
      .select("*")
      .from("users")
      .where({'users.facebook_id':req.params.id})
      .then((results) => {
        res.json(results);
      });
  });

  //list all coupons for a user
  router.get("/:id/coupon_list", (req, res) => {
    knex
    .select("*")
    .from('coupon_batches')
    .join('restaurants', 'coupon_batches.restaurant_id', '=', 'restaurants.id')
    .join('coupon_details', 'coupon_batches.id', '=', 'coupon_details.coupon_batch_id')
    .where({'coupon_details.user_id':req.params.id})
    .then((results) => {
      if (!results.length) {
        res.json({error: "Not found"});
      } else {
        res.json(results);
      }
    })
  });

  //user swipe right to add coupon to their collection
 router.post("/:id/add/:coupon_id", (req, res) => {
  knex
    .select("*")
    .from("coupon_details")
    .where({'coupon_details.id':req.params.coupon_id})
    .update({'swipe':req.body.swipe, 'user_id':req.params.id})
    .then((result) => {
      res.json(result);
    });
  });

  return router;
};
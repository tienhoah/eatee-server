"use stricts";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
      });
  });

  router.get("/:id/coupon_list", (req, res) => {
    knex
      .select("*")
      .from("coupon_details")
      .join('coupon_batches', {'coupon_batches.id': 'coupon_details.coupon_batch_id'})
      .join('users', {'users.id':'coupon_details.user_id'})
      .where({'users.id':req.params.id})
      .then((results) => {
        console.log('this user has this list of coupons: ',results);
        if (!results.length) {
          res.json({error: "Not found"});
        } else {
          res.json(results);
        }
    });
  })

  return router;
};
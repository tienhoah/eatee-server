"use stricts";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("coupon_details")
      .then((results) => {
        res.json(results);
      });
  });



  router.get("/users/:id", (req, res) => {
    knex
      .from("coupon_details")
      .where({'user_facebook_id':req.params.id})
      .andWhere({'is_redeemed':false})
      .count('id')
      .then((result) => {
        res.json(result);
      });
  });

  router.post("/redeem/:id", (req, res) => {
    knex
      .select("*")
      .from("coupon_details")
      .where({'coupon_details.id':req.params.id})
      .update('is_redeemed',true)
      .then((result) => {
        res.json(result);
    });
  })

  return router;
}

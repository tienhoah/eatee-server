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
    .from('coupon_batches')
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

  return router;
};
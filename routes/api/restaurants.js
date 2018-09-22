"use stricts";

const express = require('express');
const router = express.Router();

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

  return router;
};
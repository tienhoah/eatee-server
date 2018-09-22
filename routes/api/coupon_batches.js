"use stricts";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("coupon_batches")
      .then((results) => {
        res.json(results);
      });
  });

  router.get("/:id", (req, res) => {
    knex
      .select("*")
      .from("coupon_batches")
      .where({"coupon_batches.id": req.params.id})
      .then((results) => {
        res.json(results);
      });
  })

  router.get("/:id/coupon_details", (req, res) => {
    knex
      .select("*")
      .from("coupon_batches")
      .join("coupon_details", {'coupon_batches.id': 'coupon_details.coupon_batch_id'})
      .where({'coupon_batch_id': req.params.id})
      .then((results) => {
        res.json(results);
      });
  })




  return router;
};
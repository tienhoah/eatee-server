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

  router.get("/:id", (req, res) => {
    knex("coupon_details")
      where({"coupon_details.coupon_batch_id":req.params.id})
      having('swipe', '=', true)
      .count()
  })

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

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

  router.post("/:id", (req, res) => {
      knex
        .select("*")
        .from("coupon_details")
        .where({'coupon_details.id':req.params.id})
        .update('is_redeemed',true)
        .then((result) => {
          console.log(result)
          res.json(result);
      });
  })



  return router;
}

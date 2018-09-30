"use stricts";

const express = require("express");
const router = express.Router();

module.exports = knex => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("coupon_batches")
      .where("quantity", ">", 0)
      .then(results => {
        res.json(results);
      });
  });

  router.get("/:id", (req, res) => {
    knex
      .select("*")
      .from("coupon_batches")
      .where({ "coupon_batches.id": req.params.id })
      .then(results => {
        res.json(results);
      });
  });

  //select first coupon where user_id is null and swipe is false
  router.get("/:id/coupon_details", (req, res) => {
    knex
      .first("coupon_details.id")
      .from("coupon_details")
      .join("coupon_batches", {
        "coupon_batches.id": "coupon_details.coupon_batch_id"
      })
      .where({ coupon_batch_id: req.params.id })
      .andWhere({ user_facebook_id: null })
      .andWhere({ swipe: false })
      .then(results => {
        res.json(results);
      });
  });

  //get swipe count for a coupon batch
  router.get("/:id/swipe", (req, res) => {
    knex
      .count("*")
      .from("coupon_details")
      .where({'coupon_details.coupon_batch_id':req.params.id})
      .andWhere({'swipe':true})
      .then(result => {
        res.json(result);
      })
  })

  router.post("/:id/coupon_details", (req, res) => {
    knex
      .returning("*")
      .from("coupon_batches")
      .join("coupon_details", {
        "coupon_batches.id": "coupon_details.coupon_batch_id"
      })
      .where({ coupon_batch_id: req.params.id })
      .then(results => {
        knex("coupon_details")
          .update("is_active", false)
          .then(results => {
            res.json(results);
          });
      });
  });

  //update quantity
  router.post("/:id/quantity", (req, res) => {
    knex
      .returning("*")
      .from("coupon_batches")
      .where({ "coupon_batches.id": req.params.id })
      .update({
        quantity: req.body.quantity
      })
      .then(result => {
        res.json(result);
      });
  });

  //update impression
  router.post("/:id/impression", (req, res) => {
    knex
      .returning("*")
      .from("coupon_batches")
      .where({ "coupon_batches.id": req.params.id })
      .update({
        impression: req.body.impression
      })
      .then(result => {
        res.json(result);
      });
  });

  return router;
};

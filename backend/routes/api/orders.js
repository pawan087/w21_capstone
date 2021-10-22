const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { cartItem, Order } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const orders = await Order.findAll(options);

    res.json(orders);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, items, address1, address2 } = req.body;

    await Order.create({
      userId,
      items,
      address1,
      address2,
    });

    const orders = await Order.findAll();

    res.json(orders);
  })
);

module.exports = router;

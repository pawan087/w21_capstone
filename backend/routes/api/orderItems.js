const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { orderItem } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const orderItems = await orderItem.findAll(options);

    res.json(orderItems);
  })
);

router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const { orderItemId, quantity } = req.body;

    const orderItemToUpdate = await orderItem.findByPk(orderItemId);
    await orderItemToUpdate.update({ quantity });

    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const orderItems = await orderItem.findAll(options);

    res.json(orderItems);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, productId, quantity } = req.body;

    const newOrderItem = await orderItem.create({
      userId,
      productId,
      quantity,
    });

    res.json(newOrderItem);
  })
);

module.exports = router;

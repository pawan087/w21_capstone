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

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, productId, quantity } = req.body;

    await orderItem.create({
      userId,
      productId,
      quantity,
    });

    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const orderItems = await orderItem.findAll(options);

    res.json(orderItems);
  })
);


router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { idToDelete } = req.body;

    const orderItemToDelete = await orderItem.findByPk(idToDelete);
    await orderItemToDelete.destroy();

    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const orderItems = await orderItem.findAll(options);

    res.json(orderItems);
  })
);

module.exports = router;

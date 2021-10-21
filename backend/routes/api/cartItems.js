const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { cartItem } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const cartItems = await cartItem.findAll(options);

    res.json(cartItems);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, productId, quantity } = req.body;

    await cartItem.create({
      userId,
      productId,
      quantity,
    });

    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const cartItems = await cartItem.findAll(options);

    res.json(cartItems);
  })
);

router.post(
  "/consolidate",
  asyncHandler(async (req, res) => {
    const { idToDelete1, idToDelete2, sumQuantity, productId, userId } =
      req.body;

    const cartItem1 = await cartItem.findByPk(idToDelete1);
    await cartItem1.destroy();

    const cartItem2 = await cartItem.findByPk(idToDelete2);
    await cartItem2.destroy();

    await cartItem.create({
      userId,
      productId,
      quantity: sumQuantity,
    });

    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const cartItems = await cartItem.findAll(options);

    res.json(cartItems);
  })
);

router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { idToDelete } = req.body;

    const cartItemToDelete = await cartItem.findByPk(idToDelete);
    await cartItemToDelete.destroy();

    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const cartItems = await cartItem.findAll(options);

    res.json(cartItems);
  })
);

router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const { id, quantity } = req.body;

    const cartItemToUpdate = await cartItem.findByPk(id);
    await cartItemToUpdate.update({ quantity });

    const options = {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const cartItems = await cartItem.findAll(options);

    res.json(cartItems);
  })
);

module.exports = router;

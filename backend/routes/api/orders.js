const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { cartItem, Order, orderItem } = require("../../db/models");

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
  "/complete",
  asyncHandler(async (req, res) => {
    const { user, cartItems, lastOrderId } = req.body;

    const userId = user.id;
    const address1 = user.address1;
    const address2 = user.address2;
    const items = [];

    console.log("\n");

    let len = cartItems.length;

    for (let i = 1; i <= cartItems.length; i++) {
      items.push(lastOrderId + i);
    }

    await cartItems.forEach(async (cartitem) => {
      const productId = cartitem.product.id;
      const quantity = cartitem.quantity;

      await orderItem.create({
        userId,
        productId,
        quantity,
      });


      const cartItemToDelete = await cartItem.findByPk(cartitem.id);
      await cartItemToDelete.destroy();
    });

    console.log("\n");

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

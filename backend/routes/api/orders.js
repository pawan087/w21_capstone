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
        exclude: ["createdAt"],
      },
    };

    const orders = await Order.findAll(options);

    res.json(orders);
  })
);

router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    orderToDelete = await Order.findByPk(id);

    await orderToDelete.destroy();

    const options = {
      attributes: {
        exclude: ["createdAt"],
      },
    };

    const orders = await Order.findAll(options);

    res.json(orders);
  })
);

router.delete(
  "/clear",
  asyncHandler(async (req, res) => {
    const { idsToDeleteArr } = req.body;

    let orderToDelete;

    idsToDeleteArr.forEach(async (id) => {
      orderToDelete = await Order.findByPk(id);

      await orderToDelete.destroy();
    });

    const options = {
      attributes: {
        exclude: ["createdAt"],
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

router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const { id, address1, address2, orderItem, quantity } = req.body;

    const orderToUpdate = await Order.findByPk(id);

    if (address1 && address2) {
      orderToUpdate.update({ address1, address2 });
    }

    const orderItemId = orderItem.id;
    const orderItemToUpdate = await orderItem.findByPk(orderItemId);

    if (quantity > 0) {
      await orderItemToUpdate.update({ quantity });
    } else {
      await orderItemToUpdate.destroy();
    }

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

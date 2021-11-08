const express = require("express");
const asyncHandler = require("express-async-handler");
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
    const {
      user,
      cartItems,
      lastOrderId,
      address1,
      address2,
      creditCard,
      expirationDate,
      firstName,
      lastName,
    } = req.body;

    const userId = user.id;
    const items = [];

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

    for (let i = 1; i <= cartItems.length; i++) {
      items.push(lastOrderId + i);
    }

    await Order.create({
      userId,
      items,
      address1,
      address2,
      creditCard,
      expirationDate,
      firstName,
      lastName,
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
  "/address",
  asyncHandler(async (req, res) => {
    const { id, address1, address2 } = req.body;

    const orderToUpdate = await Order.findByPk(id);

    if (address1 && address2) {
      orderToUpdate.update({ address1, address2 });
    }

    const orders = await Order.findAll();

    res.json(orders);
  })
);

module.exports = router;

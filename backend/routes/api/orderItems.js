const express = require("express");
const asyncHandler = require("express-async-handler");
const { orderItem, Order } = require("../../db/models");

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

router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { orderItemId, orderId } = req.body;

    orderItemToDelete = await orderItem.findByPk(orderItemId);

    orderToUpdate = await Order.findByPk(orderId);

    let items = [...orderToUpdate.items];
    let userId = orderToUpdate.userId;
    let address1 = orderToUpdate.address1;
    let address2 = orderToUpdate.address2;

    const index = orderToUpdate.items.indexOf(orderItemId);

    if (index > -1) {
      items.splice(index, 1);
    }

    await orderToUpdate.destroy();

    if (items.length > 0) {
      await Order.create({
        userId,
        items,
        address1,
        address2,
      });
    }

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

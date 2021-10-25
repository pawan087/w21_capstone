const express = require("express");
const asyncHandler = require("express-async-handler");
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

router.delete(
  "/bulk",
  asyncHandler(async (req, res) => {
    const { idsToDeleteArr } = req.body;

    // console.log('\n\n\n', idsToDeleteArr, '\n\n\n')

    let itemToDelete;

    idsToDeleteArr.forEach(async (id) => {
      itemToDelete = await cartItem.findByPk(id);
      // console.log(!!itemToDelete)
      await itemToDelete.destroy();
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

router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const { id, quantity } = req.body;

    const cartItemToUpdate = await cartItem.findByPk(+id);

    if (+quantity > 0) {
      await cartItemToUpdate.update({ quantity: +quantity });
    } else {
      await cartItemToUpdate.destroy();
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

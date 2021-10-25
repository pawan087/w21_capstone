const express = require("express");
const asyncHandler = require("express-async-handler");

const { User } = require("../../db/models");

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, productId } = req.body;

    const userToUpdate = await User.findByPk(userId);

    let arr = [...userToUpdate.recentlyViewed];
    let arr2;
    let arr3;

    if (!userToUpdate.recentlyViewed.includes(productId)) {
      arr2 = [...arr, productId];

      if (arr2.length > 5) {
        arr3 = arr2.slice(1);
        await userToUpdate.update({ recentlyViewed: arr3 });
      } else {
        await userToUpdate.update({ recentlyViewed: arr2 });
      }
    }

    res.json(userToUpdate.recentlyViewed);
  })
);

module.exports = router;

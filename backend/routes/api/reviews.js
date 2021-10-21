const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Review, User, ReviewLike } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const options = {
      include: [{ model: User, attributes: ["username"] }],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const reviews = await Review.findAll(options);

    res.json(reviews);
  })
);

router.get(
  "/likes",
  asyncHandler(async (req, res) => {
    const options = {
      include: [{ model: Review, attributes: ["productId"] }],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const reviewLikes = await ReviewLike.findAll(options);

    res.json(reviewLikes);
  })
);

module.exports = router;
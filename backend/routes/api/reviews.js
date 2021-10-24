const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review, User, ReviewLike } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const options = {
      include: [{ model: User, attributes: ["username"] }],
      attributes: {
        exclude: ["updatedAt"],
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

router.put(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, productId, content, rating } = req.body;

    // console.log("\n", +userId, "\n");
    // console.log("\n", +productId, "\n");
    // console.log("\n", content, "\n");
    // console.log("\n", +rating, "\n");

    await Review.create({
      userId: +userId,
      productId: +productId,
      content,
      rating: +rating,
    });

    const options = {
      include: [{ model: User, attributes: ["username"] }],
      attributes: {
        exclude: ["updatedAt"],
      },
    };

    const reviews = await Review.findAll(options);

    res.json(reviews);
  })
);

router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    reviewToDelete = await Review.findByPk(id);

    await reviewToDelete.destroy();

    const options = {
      include: [{ model: User, attributes: ["username"] }],
      attributes: {
        exclude: ["updatedAt"],
      },
    };

    const reviews = await Review.findAll(options);

    res.json(reviews);
  })
);

router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const { id, rating, content } = req.body;

    const reviewToUpdate = await Review.findByPk(id);

    await reviewToUpdate.update({ rating, content });

    const options = {
      include: [{ model: User, attributes: ["username"] }],
      attributes: {
        exclude: ["updatedAt"],
      },
    };

    const reviews = await Review.findAll(options);

    res.json(reviews);
  })
);

module.exports = router;

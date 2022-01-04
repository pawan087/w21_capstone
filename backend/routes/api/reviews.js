const express = require("express");
const asyncHandler = require("express-async-handler");

const { Review, User, ReviewLike } = require("../../db/models");
const {
  singleMulterUpload,
  singlePublicFileUpload,
  multipleMulterUpload,
  multiplePublicFileUpload,
} = require("../../awsS3");

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

router.post(
  "/",
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const { userId, productId, content, rating } = req.body;

    let imageUrl;

    if (req.file) {
      imageUrl = await singlePublicFileUpload(req.file);
    }

    if (imageUrl) {
      await Review.create({
        userId: +userId,
        productId: +productId,
        content,
        rating: +rating,
        imageUrl,
      });
    } else {
      await Review.create({
        userId: +userId,
        productId: +productId,
        content,
        rating: +rating,
      });
    }

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
    const { id, arr } = req.body;

    if (arr.length) {
      arr.forEach(async (id) => {
        reviewLikeToDelete = await ReviewLike.findByPk(id);

        await reviewLikeToDelete.destroy();
      });
    }

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
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const { id, rating, content } = req.body;

    let imageUrl;

    if (req.file) {
      imageUrl = await singlePublicFileUpload(req.file);
    }

    const reviewToUpdate = await Review.findByPk(id);

    if (imageUrl) {
      await reviewToUpdate.update({ rating, content, imageUrl });
    } else {
      await reviewToUpdate.update({ rating, content });
    }

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
  "/image",
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    const reviewToUpdate = await Review.findByPk(+id);
    await reviewToUpdate.update({ imageUrl: null });

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

// router.post(
//   "/likesCheck",
//   asyncHandler(async (req, res) => {
//     const { userId, reviewId, like } = req.body;

//     const alreadyExists = await ReviewLike.findAll({
//       where: {
//         reviewId: +reviewId,
//         userId: +userId,
//         like: like,
//       },
//     });

//     return alreadyExists;
//   })
// );

router.post(
  "/likes",
  asyncHandler(async (req, res) => {
    const { userId, reviewId, like } = req.body;

    const alreadyExists = await ReviewLike.findAll({
      where: {
        reviewId: +reviewId,
        userId: +userId,
        like: like,
      },
    });

    if (alreadyExists.length !== 0) return;

    await ReviewLike.create({
      userId: +userId,
      reviewId: +reviewId,
      like,
    });

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

router.delete(
  "/likes",
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    reviewLikeToDelete = await ReviewLike.findByPk(+id);

    if (reviewLikeToDelete === null) return;

    await reviewLikeToDelete.destroy();

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
  "/likes",
  asyncHandler(async (req, res) => {
    const { userId, reviewId, like, idToDelete } = req.body;

    reviewLikeToDelete = await ReviewLike.findByPk(+idToDelete);

    if (reviewLikeToDelete === null) return;

    await reviewLikeToDelete.destroy();

    const alreadyExists = await ReviewLike.findAll({
      where: {
        reviewId: +reviewId,
        userId: +userId,
        like: like,
      },
    });

    if (alreadyExists.length !== 0) return;

    await ReviewLike.create({
      userId: +userId,
      reviewId: +reviewId,
      like,
    });

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

// Image Upload Test
// router.post(
//   "/images",
//   singleMulterUpload("image"),
//   asyncHandler(async (req, res) => {
//     // const profileImageUrl = await singlePublicFileUpload(req.file);

//     console.log("\n\n\n", req.file, "\n\n\n");
//   })
// );

module.exports = router;

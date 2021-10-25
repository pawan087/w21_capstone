const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Answer, AnswerLike } = require("../../db/models");

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

    const answers = await Answer.findAll(options);

    res.json(answers);
  })
);

router.get(
  "/likes",
  asyncHandler(async (req, res) => {
    const options = {
      include: [{ model: User, attributes: ["username"] }],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    const answerLikes = await AnswerLike.findAll(options);

    res.json(answerLikes);
  })
);

module.exports = router;

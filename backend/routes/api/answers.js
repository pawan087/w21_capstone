const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User, Answer, AnswerLike } = require("../../db/models");

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

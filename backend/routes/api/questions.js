const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Question } = require("../../db/models");

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

    const questions = await Question.findAll(options);

    res.json(questions);
  })
);

module.exports = router;

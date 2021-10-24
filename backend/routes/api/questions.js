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
        exclude: ["updatedAt"],
      },
    };

    const questions = await Question.findAll(options);

    res.json(questions);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, productId, content } = req.body;

    await Question.create({
      userId: +userId,
      productId: +productId,
      content,
    });

    const options = {
      include: [{ model: User, attributes: ["username"] }],
      attributes: {
        exclude: ["updatedAt"],
      },
    };

    const questions = await Question.findAll(options);

    res.json(questions);
  })
);

router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const { id, content } = req.body;

    const questionToUpdate = await Question.findByPk(id);

    await questionToUpdate.update({ content });

    const options = {
      include: [{ model: User, attributes: ["username"] }],
      attributes: {
        exclude: ["updatedAt"],
      },
    };

    const questions = await Question.findAll(options);

    res.json(questions);
  })
);

module.exports = router;

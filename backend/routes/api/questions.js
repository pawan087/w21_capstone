const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Question, Answer, AnswerLike } = require("../../db/models");

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

router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { id, answerLikeIdsArr, answersIdsArr } = req.body;

    if (answerLikeIdsArr.length) {
      answerLikeIdsArr.forEach(async (id) => {
        answerLikeToDelete = await AnswerLike.findByPk(id);

        await answerLikeToDelete.destroy();
      });
    }

    if (answersIdsArr.length) {
      answersIdsArr.forEach(async (id) => {
        answerToDelete = await Answer.findByPk(id);

        await answerToDelete.destroy();
      });
    }

    questionToDelete = await Question.findByPk(id);

    await questionToDelete.destroy();

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

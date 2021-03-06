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

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, questionId, content } = req.body;

    await Answer.create({
      userId: +userId,
      questionId: +questionId,
      content,
    });

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

router.put(
  "/update",
  asyncHandler(async (req, res) => {
    const { id, content } = req.body;

    const answerToUpdate = await Answer.findByPk(id);

    await answerToUpdate.update({ content });

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

router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const { id, arr } = req.body;

    if (arr.length) {
      arr.forEach(async (id) => {
        answerLikeToDelete = await AnswerLike.findByPk(id);

        await answerLikeToDelete.destroy();
      });
    }

    answerToDelete = await Answer.findByPk(id);

    await answerToDelete.destroy();

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

router.post(
  "/likes",
  asyncHandler(async (req, res) => {
    const { userId, answerId, like } = req.body;

    await AnswerLike.create({
      userId: +userId,
      answerId: +answerId,
      like,
    });

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

router.delete(
  "/likes",
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    answerLike = await AnswerLike.findByPk(+id);

    await answerLike.destroy();

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

router.put(
  "/likes",
  asyncHandler(async (req, res) => {
    const { userId, answerId, like, idToDelete } = req.body;

    answerLike = await AnswerLike.findByPk(+idToDelete);

    await answerLike.destroy();

    await AnswerLike.create({
      userId: +userId,
      answerId: +answerId,
      like,
    });

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

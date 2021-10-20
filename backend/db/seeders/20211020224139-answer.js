"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Answers",
      [
        {
          userId: 1,
          questionId: 1,
          content:
            "Google it, son. By the way, I've also heard they're making fridges now.",
        },
        {
          userId: 2,
          questionId: 2,
          content: "No, they do not. Get with the program, man.",
        },
        {
          userId: 3,
          questionId: 4,
          content: "Bring it on!",
        },
        {
          userId: 1,
          questionId: 4,
          content: "I can't beat both of you with my eyes closed.",
        },
        {
          userId: 2,
          questionId: 8,
          content: "Not unless they're like geniuses.",
        },
        {
          userId: 3,
          questionId: 9,
          content:
            "I would and I would do it again as a gift for my friends or family!",
        },
        {
          userId: 1,
          questionId: 6,
          content: "In the future when they release GTA VI for PS5!",
        },
        {
          userId: 2,
          questionId: 3,
          content: "Frankly I couldn't find out either.",
        },
        {
          userId: 3,
          questionId: 5,
          content:
            "I've beaten it a few times. I would say give it a shot and see if you like it!",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Answers",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

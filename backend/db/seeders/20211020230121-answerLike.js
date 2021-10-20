"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "AnswerLikes",
      [
        {
          userId: 2,
          answerId: 1,
          like: true,
        },
        {
          userId: 3,
          answerId: 1,
          like: true,
        },
        {
          userId: 2,
          answerId: 7,
          like: false,
        },
        {
          userId: 3,
          answerId: 7,
          like: true,
        },
        {
          userId: 1,
          answerId: 2,
          like: true,
        },
        {
          userId: 3,
          answerId: 2,
          like: false,
        },
        {
          userId: 3,
          answerId: 4,
          like: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "AnswerLikes",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

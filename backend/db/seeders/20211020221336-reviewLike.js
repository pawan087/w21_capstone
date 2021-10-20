"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ReviewLikes",
      [
        {
          userId: 1,
          reviewId: 1,
          like: true,
        },
        {
          userId: 2,
          reviewId: 1,
          like: false,
        },
        {
          userId: 3,
          reviewId: 1,
          like: true,
        },
        {
          userId: 1,
          reviewId: 6,
          like: false,
        },
        {
          userId: 2,
          reviewId: 6,
          like: true,
        },
        {
          userId: 3,
          reviewId: 6,
          like: true,
        },
        {
          userId: 1,
          reviewId: 8,
          like: true,
        },
        {
          userId: 2,
          reviewId: 8,
          like: true,
        },
        {
          userId: 3,
          reviewId: 8,
          like: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "ReviewLikes",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orderItems",
      [
        {
          userId: 1,
          productId: 4,
          quantity: 1,
        },
        {
          userId: 2,
          productId: 5,
          quantity: 4,
        },
        {
          userId: 3,
          productId: 4,
          quantity: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "orderItems",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

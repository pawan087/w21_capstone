"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "cartItems",
      [
        {
          userId: 1,
          productId: 1,
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
        {
          userId: 1,
          productId: 2,
          quantity: 2,
        },
        {
          userId: 2,
          productId: 1,
          quantity: 1,
        },
        {
          userId: 3,
          productId: 3,
          quantity: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "cartItems",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

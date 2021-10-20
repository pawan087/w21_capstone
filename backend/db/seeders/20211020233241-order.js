"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Orders",
      [
        {
          userId: 1,
          items: [1],
          address1: "123 Main St.",
          address2: "San Jose, CA 95127",
        },
        {
          userId: 2,
          items: [2],
          address1: "123 Main St.",
          address2: "San Jose, CA 95127",
        },
        {
          userId: 3,
          items: [3],
          address1: "123 Main St.",
          address2: "San Jose, CA 95127",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Orders",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

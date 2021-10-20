"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Video Games",
        },
        {
          name: "Toys & Games",
        },
        {
          name: "Electronics",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Categories",
      {
        name: {
          [Op.in]: ["Video Games", "Toys & Games", "Electronics"],
        },
      },
      {}
    );
  },
};

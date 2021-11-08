"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Video Games", // 1
        },
        {
          name: "Toys & Games", // 2
        },
        {
          name: "Electronics", // 3
        },
        {
          name: "Consoles & Hardware", // 4
        },
        {
          name: "Gaming Accessories", // 5
        },
        {
          name: "Clothing", // 6
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

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "FurtherSubcategories",
      [
        {
          name: "Headphones",
        },
        {
          name: "TVs",
        },
        {
          name: "Accessories",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "FurtherSubcategories",
      {
        name: { [Op.in]: ["Headphones", "TVs", "Accessories"] },
      },
      {}
    );
  },
};

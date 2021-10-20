"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Playstation 5",
        },
        {
          name: "Cell Phones",
        },
        {
          name: "Puzzles",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Categories",
      {
        name: { [Op.in]: ["Playstation 5", "Cell Phones", "Puzzles"] },
      },
      {}
    );},
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Subcategories",
      [
        {
          name: "Playstation 5",
        },
        {
          name: "Audio",
        },
        {
          name: "Puzzles",
        },
        {
          name: "TV & Home Theater",
        },
        {
          name: "Cell Phones",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Subcategories",
      {
        name: {
          [Op.in]: [
            "Playstation 5",
            "Audio",
            "TV & Home Theater",
            "Cell Phones",
            "Puzzles",
          ],
        },
      },
      {}
    );
  },
};

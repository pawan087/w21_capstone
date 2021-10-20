"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Brands",
      [
        {
          name: "Apple",
        },
        {
          name: "Rockstar Games",
        },
        {
          name: "Pokemon",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Brands",
      {
        name: { [Op.in]: ["Apple", "Rockstar Games", "Pokemon"] },
      },
      {}
    );},
};

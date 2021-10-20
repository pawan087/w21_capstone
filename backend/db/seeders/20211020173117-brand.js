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
          name: "Western Digital",
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
        name: { [Op.in]: ["Apple", "Western Digital", "Pokemon"] },
      },
      {}
    );},
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Brands",
      [
        {
          name: "Microsoft",
        },
        {
          name: "Rockstar Games",
        },
        {
          name: "Pokemon",
        },
        {
          name: "Apple",
        },
        {
          name: "Helix",
        },
        {
          name: "Vizio",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Brands",
      {
        name: {
          [Op.in]: [
            "Microsoft",
            "Rockstar Games",
            "Pokemon",
            "Apple",
            "Helix",
            "Vizio",
          ],
        },
      },
      {}
    );
  },
};

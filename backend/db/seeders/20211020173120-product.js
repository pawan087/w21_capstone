"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Grand Theft Auto V",
          description:
            "When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.",
          brandId: 2,
          price: 19.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10161250/Grand-Theft-Auto-V-Premium-Edition---PlayStation-4?$pdp$$&fmt=webp",
          ],
          rating: 5.0,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Products",
      {
        name: { [Op.in]: ["Grand Theft Auto V"] },
      },
      {}
    );
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          productId: 1,
          content: "This is single handedly the best video game of all time.",
          rating: 5,
        },
        {
          userId: 2,
          productId: 1,
          content: "It was okay. Too much violence for my taste.",
          rating: 2.5,
        },
        {
          userId: 3,
          productId: 1,
          content:
            "I would not recommend this product to my kids but otherwise, yea, it was great.",
          rating: 3.5,
        },
        {
          userId: 1,
          productId: 5,
          content: "This iPhone is the best iPhone I have ever owned",
          rating: 5,
        },
        {
          userId: 2,
          productId: 5,
          content: "I just think android does it so much better tbh.",
          rating: 1,
        },
        {
          userId: 3,
          productId: 5,
          content: "It is great until it is not. You know what I mean.",
          rating: 3,
        },
        {
          userId: 1,
          productId: 4,
          content: "I love the Vizio hardware integrated into these TVs.",
          rating: 4.5,
        },
        {
          userId: 2,
          productId: 4,
          content: "It is not worth the money if you do not watch a lot of TV.",
          rating: 2.5,
        },
        {
          userId: 3,
          productId: 4,
          content: "I prefer a Samsung over a Vizio but to each their own.",
          rating: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Reviews",
      {
        userId: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Questions",
      [
        {
          userId: 1,
          productId: 3,
          content: "When did Microsoft get into the headphones business?",
        },
        {
          userId: 2,
          productId: 3,
          content: "Does anyone know if these are offered in a wired edition?",
        },
        {
          userId: 3,
          productId: 3,
          content: "Why is it called Series X?",
        },
        {
          userId: 1,
          productId: 1,
          content: "Who wants to play me online?",
        },
        {
          userId: 2,
          productId: 1,
          content:
            "Has anyone beaten this game yet? I want to know if it's worthwhile continuing.",
        },
        {
          userId: 3,
          productId: 1,
          content: "Has there ever been a greater game created?",
        },
        {
          userId: 1,
          productId: 2,
          content:
            "Did anyone elses set come with a missing piece? I swear I can't find it anywhere.",
        },
        {
          userId: 2,
          productId: 2,
          content: "Do you think this is suitable for a toddler?",
        },
        {
          userId: 3,
          productId: 2,
          content: "Why would anyone want to pay for such an item?",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Questions",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

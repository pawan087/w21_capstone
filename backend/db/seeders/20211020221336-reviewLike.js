"use strict";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let reviewLikes = [];

for (let i = 1; i <= 12; i++) {
  for (let j = 1; j < 990; j++) {
    let reviewLike = {};

    reviewLike["userId"] = i;
    reviewLike["reviewId"] = j;

    let randomNum = randomIntFromInterval(1, 100);

    if (randomNum <= 50) {
      // like
      reviewLike["like"] = true;
    } else {
      // dislike
      reviewLike["like"] = false;
    }

    reviewLikes.push(reviewLike);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ReviewLikes", reviewLikes, {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "ReviewLikes",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

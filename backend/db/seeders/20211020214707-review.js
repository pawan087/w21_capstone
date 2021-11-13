"use strict";

var faker = require("faker");

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let ratings = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
let reviewsArr = [];

for (let i = 1; i <= 154; i++) {
  const rndInt = randomIntFromInterval(6, 30);

  for (let j = 1; j <= rndInt; j++) {
    let review = {};
    let randomUsersIndex = Math.floor(Math.random() * 12);
    let randomParagraph = faker.lorem.paragraph();

    const rndInt = randomIntFromInterval(1, 100);
    let randomRatingsIndexLow = randomIntFromInterval(0, 6);
    let randomRatingsIndexHigh = randomIntFromInterval(6, 9);

    if (rndInt <= 25) {
      review["rating"] = ratings[randomRatingsIndexLow];
    } else {
      review["rating"] = ratings[randomRatingsIndexHigh];
    }

    review["userId"] = users[randomUsersIndex];
    review["productId"] = i;
    review["content"] = randomParagraph;

    if (j === 1) {
      let randomImgUrl4 = faker.image.imageUrl();
      review["imageUrl"] = randomImgUrl4;
    }

    reviewsArr.push(review);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reviews", reviewsArr, {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Reviews",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

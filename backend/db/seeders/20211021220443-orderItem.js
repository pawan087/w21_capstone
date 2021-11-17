"use strict";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let arr = [];

for (let i = 1; i <= 100; i++) {
  const rndInt1 = randomIntFromInterval(1, 162);
  const rndInt2 = randomIntFromInterval(1, 5);

  let obj = {};

  obj["userId"] = 1;
  obj["quantity"] = rndInt2;
  obj["productId"] = rndInt1;

  arr.push(obj);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("orderItems", arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "orderItems",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

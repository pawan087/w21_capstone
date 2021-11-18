"use strict";

let arr = [];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt1 = randomIntFromInterval(1, 6);

for (let i = 1; i <= rndInt1; i++) {
  let obj = {};

  obj["userId"] = 1;

  const rndInt2 = randomIntFromInterval(1, 165);

  obj["productId"] = rndInt2;

  const rndInt3 = randomIntFromInterval(1, 5);

  obj["quantity"] = rndInt3;

  arr.push(obj);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("cartItems", arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "cartItems",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

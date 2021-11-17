"use strict";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function AddMinutesToDate(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

let curTime = new Date();

let address1Arr = [
  "123 Main St.",
  "456 Central Ave.",
  "789 George Washington Blvd.",
];

let address2Arr = [
  "San Jose, CA 95127",
  "Martinez, CA 94553",
  "San Ramon, CA 94583",
];

let arr = [];

for (let i = 1; i <= 12; i++) {
  const rndInt1 = randomIntFromInterval(0, 2);

  let obj = {};

  obj["userId"] = 1;
  obj["address1"] = address1Arr[rndInt1];
  obj["address2"] = address2Arr[rndInt1];
  obj["creditCard"] = "1234123412341234";
  obj["expirationDate"] = "01/26";

  const rndInt4 = randomIntFromInterval(1, 180);

  let pastTime = AddMinutesToDate(curTime, -(rndInt4 * 1440));

  obj["createdAt"] = pastTime;
  obj["updatedAt"] = pastTime;

  const rndInt2 = randomIntFromInterval(1, 5);

  let items = [];

  let notChoose = [];

  for (let i = 0; i < rndInt2; i++) {
    const rndInt3 = randomIntFromInterval(1, 100);
    if (!notChoose.includes(rndInt3)) {
      notChoose.push(rndInt3);
      items.push(rndInt3);
    } else {
      continue;
    }
  }

  obj["items"] = [...items];

  arr.push(obj);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Orders", arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Orders",
      {
        userId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};

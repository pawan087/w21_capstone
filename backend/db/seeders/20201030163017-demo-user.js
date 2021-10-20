"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@aa.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Testy",
          lastName: "McTesterson",
          phone: String(faker.phone.phoneNumber()),
          address1: "123 Main St.",
          address2: "San Jose, CA 95127",
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: "456 White Ave.",
          address2: "San Ramon, CA 94583",
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: "789 Black Rd.",
          address2: "Martinez, CA 94553",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};

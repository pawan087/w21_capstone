"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "testFirstName",
          lastName: "testLastName",
          phone: 123456789,
          address1: "123 Main St.",
          address2: "San Jose, CA 95127",
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          // hashedPassword: bcrypt.hashSync(faker.internet.password()),
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "testFirstName",
          lastName: "testLastName",
          phone: 123456789,
          address1: "123 Main St.",
          address2: "San Jose, CA 95127",
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          // hashedPassword: bcrypt.hashSync(faker.internet.password()),
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "testFirstName",
          lastName: "testLastName",
          phone: 123456789,
          address1: "123 Main St.",
          address2: "San Jose, CA 95127",
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

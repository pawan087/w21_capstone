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
          cart: [1, 4],
          recentlyViewed: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
        },
        {
          email: faker.internet.email(),
          username: faker.internet.userName(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: String(faker.phone.phoneNumber()),
          address1: faker.address.streetAddress(),
          address2: `${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}}`,
          cart: [2, 5],
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

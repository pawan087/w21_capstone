"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

let arr = [];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 1; i <= 12; i++) {
  const rndInt = randomIntFromInterval(1, 165);

  arr.push(rndInt);
}

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
          phone: "(408) 555-5555",
          address1: "123 Main St.",
          address2: "San Jose, CA 95127",
          recentlyViewed: arr,
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

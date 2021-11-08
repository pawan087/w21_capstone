"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      items: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        defaultValue: [],
      },
      address1: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      address2: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      creditCard: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      expirationDate: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      firstName: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};

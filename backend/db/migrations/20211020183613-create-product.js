"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
      brandId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "Brands" },
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Categories" },
      },
      subcategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Subcategories" },
      },
      furtherSubcategoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "FurtherSubcategories" },
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING(1000)),
        defaultValue: [],
      },
      rating: {
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable("Products");
  },
};

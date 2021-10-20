"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: "categoryId" });
    }
  }

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};

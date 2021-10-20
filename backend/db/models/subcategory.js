"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    static associate(models) {
      Subcategory.hasMany(models.Product, { foreignKey: "SubcategoryId" });
    }
  }

  Subcategory.init(
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
      modelName: "Subcategory",
    }
  );
  return Subcategory;
};

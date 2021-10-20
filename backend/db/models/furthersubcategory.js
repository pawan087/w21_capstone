"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class FurtherSubcategory extends Model {
    static associate(models) {
      FurtherSubcategory.hasMany(models.Product, {
        foreignKey: "furtherSubcategoryId",
      });
    }
  }

  FurtherSubcategory.init(
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
      modelName: "FurtherSubcategory",
    }
  );
  return FurtherSubcategory;
};

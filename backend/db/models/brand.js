"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Product, { foreignKey: "brandId" });
    }
  }

  Brand.init(
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
      modelName: "Brand",
    }
  );
  return Brand;
};

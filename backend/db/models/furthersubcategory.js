"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class FurtherSubcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FurtherSubcategory.hasMany(models.Product, { foreignKey: "furtherSubcategoryId" });
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

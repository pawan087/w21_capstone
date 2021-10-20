"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(model.Brand, { foreignKey: "brandId" });

      Product.belongsTo(model.Category, { foreignKey: "categoryId" });

      Product.belongsTo(model.FurtherSubcategory, {
        foreignKey: "furtherSubcategoryId",
      });

      Product.belongsTo(model.Subcategory, {
        foreignKey: "subcategoryId",
      });

      Product.hasMany(models.Review, { foreignKey: "productId" });

      Product.hasMany(models.Question, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 100],
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      brandId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      price: { type: DataTypes.DECIMAL, allowNull: false },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subcategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      furtherSubcategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING(1000)),
        allowNull: false,
        defaultValue: [],
      },
      rating: { type: DataTypes.DECIMAL, allowNull: true },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: "userId" });

      Review.belongsTo(models.Product, { foreignKey: "productId" });

      Review.hasMany(models.ReviewLike, { foreignKey: "reviewId" });
    }
  }
  Review.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      productId: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.STRING(1000), allowNull: false },
      rating: { type: DataTypes.DECIMAL, allowNull: true },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};

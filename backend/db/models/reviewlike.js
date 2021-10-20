"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReviewLike extends Model {
    static associate(models) {
      ReviewLike.belongsTo(models.User, { foreignKey: "userId" });

      ReviewLike.belongsTo(models.Review, { foreignKey: "reviewId" });
    }
  }
  ReviewLike.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      reviewId: { type: DataTypes.INTEGER, allowNull: false },
      like: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "ReviewLike",
    }
  );
  return ReviewLike;
};

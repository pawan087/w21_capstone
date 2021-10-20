"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReviewLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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

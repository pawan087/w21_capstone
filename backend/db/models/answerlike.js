"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AnswerLike extends Model {
    static associate(models) {
      AnswerLike.belongsTo(models.User, { foreignKey: "userId" });

      AnswerLike.belongsTo(models.Answer, { foreignKey: "answerId" });
    }
  }
  AnswerLike.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      answerId: { type: DataTypes.INTEGER, allowNull: false },
      like: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "AnswerLike",
    }
  );
  return AnswerLike;
};

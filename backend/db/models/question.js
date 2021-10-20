"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.User, { foreignKey: "userId" });

      Question.belongsTo(models.Product, { foreignKey: "productId" });

      Question.hasMany(models.Answer, { foreignKey: "questionId" });
    }
  }
  Question.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      productId: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.STRING(500), allowNull: false },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};

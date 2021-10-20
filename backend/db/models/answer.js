"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.User, { foreignKey: "userId" });

      Answer.belongsTo(models.Question, { foreignKey: "questionId" });

      Answer.hasMany(models.AnswerLike, { foreignKey: "answerId" });
    }
  }
  Answer.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      questionId: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.STRING(1000), allowNull: false },
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};

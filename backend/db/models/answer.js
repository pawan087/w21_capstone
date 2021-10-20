"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Answer.belongsTo(models.User, { foreignKey: "userId" });

      Answer.belongsTo(models.Question, { foreignKey: "questionId" });
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

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Question.belongsTo(models.User, { foreignKey: "userId" });

      Question.belongsTo(models.Product, { foreignKey: "productId" });
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

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orderItem.belongsTo(models.User, { foreignKey: "userId" });

      orderItem.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }
  orderItem.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      productId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    },
    {
      sequelize,
      modelName: "orderItem",
    }
  );
  return orderItem;
};

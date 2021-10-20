"use strict";

const { Model, Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const {
        id,
        username,
        email,
        firstName,
        lastName,
        phone,
        address1,
        address2,
        recentlyViewed,
        cart,
      } = this; // context will be the User instance

      return {
        id,
        username,
        email,
        firstName,
        lastName,
        phone,
        address1,
        address2,
        recentlyViewed,
        cart,
      };
    }

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }

    static async getCurrentUserById(id) {
      return await User.scope("currentUser").findByPk(id);
    }

    static async login({ credential, password }) {
      const { Op } = require("sequelize");

      const user = await User.scope("loginUser").findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential,
          },
        },
      });

      if (user && user.validatePassword(password)) {
        return await User.scope("currentUser").findByPk(user.id);
      }
    }

    static async signup({
      username,
      email,
      password,
      firstName,
      lastName,
      phone,
      address1,
      address2,
    }) {
      const hashedPassword = bcrypt.hashSync(password);

      const user = await User.create({
        username,
        email,
        hashedPassword,
        firstName,
        lastName,
        phone,
        address1,
        address2,
      });

      return await User.scope("currentUser").findByPk(user.id);
    }

    static associate(models) {
      User.hasMany(models.Review, { foreignKey: "userId" });

      User.hasMany(models.ReviewLike, { foreignKey: "userId" });

      User.hasMany(models.Question, { foreignKey: "userId" });

      User.hasMany(models.Answer, { foreignKey: "userId" });

      User.hasMany(models.AnswerLike, { foreignKey: "userId" });

      User.hasMany(models.cartItem, { foreignKey: "userId" });

      User.hasMany(models.Order, { foreignKey: "userId" });
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [0, 50],
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [0, 50],
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address1: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [0, 100],
        },
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [0, 100],
        },
      },
      recentlyViewed: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        defaultValue: [],
      },
      cart: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        defaultValue: [],
      },
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );

  return User;
};

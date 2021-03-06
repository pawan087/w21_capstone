const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

const validateLogin = [
  check("credential")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please provide a valid email or username."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

// Log in
router.post(
  "/",
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// Update
router.put(
  "/update",
  asyncHandler(async (req, res, next) => {
    const { id, phone, address1, address2 } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      const err = new Error("Login failed");

      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];

      return next(err);
    }

    await user.update({
      phone,
      address1,
      address2,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// Update Name
router.put(
  "/name",
  asyncHandler(async (req, res, next) => {
    const { id, firstName, lastName } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      const err = new Error("Login failed");

      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];

      return next(err);
    }

    await user.update({
      firstName,
      lastName,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// Update Email
router.put(
  "/email",
  asyncHandler(async (req, res, next) => {
    const { id, email, currentPassword } = req.body;

    const user = await User.findByPk(id);
    const validPassword = await User.checkPassword({ id, currentPassword });

    if (!validPassword) {
      const err = new Error("Incorrect Password");

      err.status = 401;
      err.title = "Incorrect Password";
      err.errors = ["The provided password was invalid."];

      return next(err);
    }

    await user.update({
      email,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// Update Password
router.put(
  "/password",
  asyncHandler(async (req, res, next) => {
    const { id, oldPassword, newPassword } = req.body;

    const user = await User.findByPk(id);
    const validPassword = await User.checkPassword({
      id,
      currentPassword: oldPassword,
    });

    if (!validPassword) {
      const err = new Error("Incorrect Password");

      err.status = 401;
      err.title = "Incorrect Password";
      err.errors = ["The provided password was invalid."];

      return next(err);
    }

    let hashedPassword;
    hashedPassword = bcrypt.hashSync(newPassword);

    await user.update({
      hashedPassword,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// Log out
router.delete("/", (_req, res) => {
  res.clearCookie("token");

  return res.json({ message: "success" });
});

// Restore session user
router.get("/", restoreUser, (req, res) => {
  const { user } = req;

  if (user) {
    return res.json({
      user: user.toSafeObject(),
    });
  } else return res.json({});
});

module.exports = router;

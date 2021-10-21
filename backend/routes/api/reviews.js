const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Review, User } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    // const options = {
    //   where: { role: "admin" },
    // };

    //   const spots = await Product.findAll(options);

    const options = {
      include: [{ model: User, attributes: ["username"] }],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };

    // const products = await Product.findByPk(1, options);
    const reviews = await Review.findAll(options);

    // Albums.findAll({
    //   include: [{
    //     model: Artists,
    //     as: 'Singer',
    //     where: { name: 'Al Green' } //
    //   }]
    // })

    // console.log("PRODUCTS ---------->>>>>", products.Brand.name);

    // console.log(reviews);

    res.json(reviews);
  })
);

module.exports = router;

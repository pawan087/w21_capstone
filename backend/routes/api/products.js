const express = require("express");
const asyncHandler = require("express-async-handler");
const {
  Brand,
  Category,
  Subcategory,
  FurtherSubcategory,
  Product,
} = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    // const options = {
    //   where: { role: "admin" },
    // };

    //   const spots = await Product.findAll(options);

    const options = {
      include: [
        { model: Category, as: "Category", attributes: ["name", "id"] },
        { model: Brand, attributes: ["name"] },
        { model: Subcategory, attributes: ["name"] },
        { model: FurtherSubcategory, attributes: ["name"] },
      ],
      attributes: {
        exclude: [
          "categoryId",
          "brandId",
          "subcategoryId",
          "furtherSubcategoryId",
          "createdAt",
          "updatedAt",
        ],
      },
      // order: [['name', 'ASC']]
      order: [["id", "ASC"]],
    };

    // const products = await Product.findByPk(1, options);
    const products = await Product.findAll(options);

    // Albums.findAll({
    //   include: [{
    //     model: Artists,
    //     as: 'Singer',
    //     where: { name: 'Al Green' } //
    //   }]
    // })

    res.json(products);
  })
);

module.exports = router;

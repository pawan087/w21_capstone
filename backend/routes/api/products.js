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

    const products = await Product.findAll(options);

    res.json(products);
  })
);

module.exports = router;

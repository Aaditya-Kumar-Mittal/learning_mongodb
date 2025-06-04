const Product = require("../models/model-Product");
const path = require("path");
const fs = require("fs");

const insertSampleProducts = async (req, res) => {
  try {
    // Resolve the path and read the file
    const filePath = path.join(__dirname, "../sample/data-products.json");
    const fileData = fs.readFileSync(filePath, "utf-8");

    // Parse the JSON data
    const productList = JSON.parse(fileData);

    // Insert into MongoDB
    const result = await Product.insertMany(productList);

    return res.status(200).json({
      success: true,
      message: "Data Inserted Successfully!",
      data: `Inserted ${result.length} products`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getProductStats = async (req, res) => {
  try {
    // Filter Query -> Filter in Stock products
    const inStockProducts = await Product.aggregate([
      {
        // Need to match which product is in stock and which is not
        $match: { inStock: true, price: { $gt: 500 } },
      },
      {
        // Group Our Document by Catergory and calculate the average price each category
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Data Fetched Successfully!",
      length: inStockProducts.length,
      data: inStockProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      { $match: { category: "Electronics" } },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$price" },
          avgPrice: { $avg: "$price" },
          maxPrice: { $max: "$price" },
          minPrice: { $min: "$price" },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          avgPrice: 1,
          maxPrice: 1,
          minPrice: 1,
          priceRange: { $subtract: ["$maxPrice", "$minPrice"] },
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Data Fetched Successfully!",
      length: result.length,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  insertSampleProducts,
  getProductStats,
  getProductAnalysis,
};

const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");

router.route("/").get(getAllProducts).post(createNewProduct);

router
  .route("/:id")
  .get(getAProductById)
  .put(updateProductById)
  .delete(deleteProductById);

module.exports = router;

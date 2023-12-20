const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

const getAProductById = async (req, res) => {
  console.log("haha");
  const { id } = req.params;
  const product = await Product.findOne({ id: id });
  if (!product) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ err: `No item with id ${id}` });
  }
  res.status(StatusCodes.OK).json({ product });
};

const createNewProduct = async (req, res) => {
  const { id } = req.body;
  const isIdExist = await Product.findOne({ id });
  if (isIdExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ err: "id already exist" });
  }
  const product = await Product.create(req.body);
  res.status(StatusCodes.OK).json({ product });
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOneAndUpdate({ id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ msg: "success", product });
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOneAndDelete({ id });
  res.status(StatusCodes.OK).json({ msg: "success", product });
};

module.exports = {
  getAllProducts,
  getAProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
};

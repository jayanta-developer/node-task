const Product = require('../module/product');
const AppError = require('../util/appError');

exports.GetAllProduct = async (req, res, next) => {
  const product = await Product.find();
  res.status(200).send(product);
  next();
};

exports.CreteProduct = async (req, res, next) => {
  const existingProduct = await Product.findOne({ model: req.body.model });

  if (existingProduct) {
    return next(new AppError('Duplicate product found', 400));
  }

  const product = await Product.create(req.body);
  res.status(201).json({ data: product });
  next();
};

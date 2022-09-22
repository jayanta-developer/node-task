const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product');

router.route('/').get(ProductController.GetAllProduct).post(ProductController.CreteProduct);

module.exports = router;

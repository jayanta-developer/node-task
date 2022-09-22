const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'A product must have to a brand name!'],
  },

  model: {
    type: String,
    required: [true, 'A product must have to a model number!'],
    unique: true,
  },

  price: {
    type: Number,
    required: [true, 'A product must have to a price!'],
    min: [100, 'A product must be greater than 100'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

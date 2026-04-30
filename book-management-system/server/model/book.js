const mongoose = require('mongoose');
const bookShema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // 分类
  stock: { type: Number, default: 10 }, // 库存
  createTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', bookShema);
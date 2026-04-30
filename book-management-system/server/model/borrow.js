const mongoose = require('mongoose');
const borrowShema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  borrowTime: { type: Date, default: Date.now },
  returnTime: { type: Date, default: null },
  status: { type: String, default: 'pedding' }, // 状态（pendding/borrowed/returned）
});

module.exports = mongoose.model('Borrow', borrowShema);
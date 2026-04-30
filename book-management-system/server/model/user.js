const mongoose = require('mongoose');
const userShema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // 密码（加密存储）
  email: { type: String, required: true },
  role: { type: String, default: 'user' },
  createTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userShema);
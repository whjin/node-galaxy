const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./config/config');

exports.auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: '请先登录！' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'token无效或已过期！' });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: '无权限访问，请联系管理员！' });
  }
  next();
};
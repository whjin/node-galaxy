exports = module.exports = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || '服务器内部错误，请稍后再试！',
  });
}

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports.CustomError = CustomError;
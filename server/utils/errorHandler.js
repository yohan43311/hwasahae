function errorHandler(err, req, res, next) {
  res.status(500).json({
    result: "fail",
    error: err.message || "Error",
  });
}

module.exports = errorHandler;

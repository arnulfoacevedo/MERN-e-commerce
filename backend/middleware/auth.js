const ErrorHander = require("../utils/errorHandler");
const catchAcyncError = require("./catchAcyncError");
const JWT = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAcyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHander("Please login to access this sourec"), 401);
  }

  const recordedData = JWT.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(recordedData.id);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};

const { User } = require("../Models");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET_KEY;

//accessToken 발급
const createAcessToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

//accessToken 검증
const verifyAccesstoken = (token) => {
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret);
    return {
      result: "ok",
      decoded,
    };
  } catch (err) {
    return {
      result: "fail",
      message: err.message,
    };
  }
};

//refreshToken 발급
const createRefreshToken = () => {
  return jwt.sign({}, secret, { expiresIn: "14d" });
};

//refreshToken 검증
const verifyRefreshtoken = async (token, userId) => {
  const user = await User.findOne({ _id: userId });
  if (user.refreshToken === token) {
    try {
      jwt.verify(token, secret);
      return true;
    } catch (err) {
      return false;
    }
  }
  return false;
};

module.exports = {
  createAcessToken,
  verifyAccesstoken,
  createRefreshToken,
  verifyRefreshtoken,
};

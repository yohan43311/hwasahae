const { User } = require("../Models");
const validator = require("validator");
const bcrypt = require("bcrypt");

const asyncHandler = require("../utils/asyncHandler");
const { createAcessToken, createRefreshToken } = require("../utils/jwt");

//회원가입
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, zipcode, address, detailAddress, role } =
    req.body;

  let user = await User.findOne({ email, deletedAt: null });

  if (user) return res.status(400).json("이미 존재하는 이매일입니다.");
  if (!name | !email || !password)
    return res.status(400).json("모든 항목은 필수사항입니다.");
  if (!validator.isEmail(email))
    return res.status(400).json("이메일 형식이 올바르지 않습니다.");
  if (!validator.isStrongPassword(password))
    return res.status(400).json("비밀번호 형식이 올바르지 않습니다.");

  user = new User({
    name,
    email,
    password,
    zipcode,
    address,
    detailAddress,
    role,
  });

  //비밀번호 암호화 하기
  const salt = await bcrypt.genSalt(10); //바이트 단위의 임의의 문자열 salt생성
  user.password = await bcrypt.hash(user.password, salt); //비밀번호 + salt로 암호화된 비밀번호 생성

  const newUser = await user.save(); //유저 저장

  res.status(200).json(newUser);
});

//로그인
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email, deletedAt: null });
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!user || !isValidPassword)
    return res.status(400).json("이메일 또는 비밀번호가 일치하지 않습니다.");

  //로그인 성공 후
  const accessToken = createAcessToken(user);
  const refreshToken = createRefreshToken();

  //새로 발급한 refreshToken을 DB 유저 스키마에 저장
  user = await User.findByIdAndUpdate(user._id, {
    refreshToken,
  });

  res.cookie("accessToken", accessToken); // Access Token을 Cookie에 전달한다.
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, //  자바스크립트로 브라우저의 쿠키에 접근하는 것을 막기 위한 옵션
  }); // Refresh Token을 Cookie에 전달한다.

  res.status(200).json(user);
});

module.exports = { registerUser, loginUser };

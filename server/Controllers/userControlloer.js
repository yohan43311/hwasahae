const UserService = require("../Services/UserService");
const asyncHandler = require("../utils/asyncHandler");

//서비스 가져오기
const UserServiceInstance = new UserService();

//회원가입
const registerUser = asyncHandler(async (req, res) => {
  const user = await UserServiceInstance.Singup(req.body);

  res.status(200).json(user);
});

//로그인
const loginUser = asyncHandler(async (req, res) => {
  const user = await UserServiceInstance.SignIn(req.body, res);

  res.cookie("accessToken", user?.accessToken);
  res.cookie("refreshToken", user?.refreshToken, {
    httpOnly: true, //  자바스크립트로 브라우저의 쿠키에 접근하는 것을 막기 위한 옵션
  });

  res.status(200).json(user);
});

//특정 유저 정보 조회
const getUserInfo = asyncHandler(async (req, res) => {
  const user = await UserServiceInstance.GetUserById(res.locals.userInfo);

  res.status(200).json(user);
});

module.exports = { registerUser, loginUser, getUserInfo };

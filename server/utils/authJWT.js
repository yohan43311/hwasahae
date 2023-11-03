// authJWT.js
const { User } = require("../Models");
const {
  verifyAccesstoken,
  verifyRefreshtoken,
  createRefreshToken,
} = require("../utils/jwt");

const authJWT = (req, res, next) => {
  const accessToken = req.cookies.accessToken; //쿠키에서 엑세스토큰 획득
  const refreshToken = req.cookies.refreshToken; //쿠키에서 리프레시토큰 획득

  // 쿠키에 토큰이 없을 경우 (재 로그인)
  if (!accessToken)
    return res
      .status(401)
      .json({ message: "Access Token이 존재하지 않습니다." });
  if (!refreshToken)
    return res
      .status(401)
      .json({ message: "Refresh Token이 존재하지 않습니다." });

  // accessToken 검증
  const result = verifyAccesstoken(accessToken);
  if (result.ok) {
    // 토큰 검증이 성공적으로 완료되면 토큰에 담긴 값을 이후 request handler에서도 사용할수 있도록 임시 저장소인 res.locals에 등록
    // 이렇게 등록을 해놓으면 이후의 app.post, app.get, app.put, app.delete에서도 토큰에 담긴 유저 정보를 사용할 수 있다.
    res.locals.userInfo = result;
    next();
  } else {
    // 검증에 실패하거나 엑세스 토큰이 만료되었다면
    //  리프레시 토큰 만료 체크 (재 로그인 유도)
    const isRefreshTokenValidate = verifyRefreshtoken(refreshToken, result);
    if (!isRefreshTokenValidate)
      return res
        .status(419)
        .json({ message: "Refresh Token이 만료되었습니다." });

    // 리프레시 토큰이 만료되지 않았다면 활용하여 재발급
    const user = User.findOne({ refreshToken });
    if (!user) {
      return res
        .status(419) //POST 전송시 CSRF 토큰이 누락되거나 맞지 않아서 발생하는 오류
        .json({ message: "Refresh Token의 정보가 서보에 존재하지 않습니다." });
    }

    const newAccessToken = createRefreshToken(user);
    res.cookies("accessToken", newAccessToken);
    next();
  }
};

module.exports = authJWT;

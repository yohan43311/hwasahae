const { User } = require("../Models");
const bcrypt = require("bcrypt");
const { createAcessToken, createRefreshToken } = require("../utils/jwt");

class UserService {
  constructor() {}

  //회원가입
  async Singup(userDTO) {
    const { email, name, password, zipcode, address, detailAddress, role } =
      userDTO;

    const isEmailSaved = await User.findOne({ email, deletedAt: null });

    //이미 DB에 이메일이 있다면
    if (isEmailSaved) {
      const error = new Error("이미 등록되어 있는 이메일입니다.");
      error.status = 400;
      throw error;
    }

    //DB에 이메일이 없다면
    const user = new User({
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

    const newUser = await user.save(); //새로운 유저 저장

    return {
      id: newUser?._id,
      name: newUser?.name,
      email: newUser?.email,
      zipcode: newUser?.zipcode,
      address: newUser?.address,
      detailAddress: newUser?.detailAddress,
      role: newUser?.role,
    };
  }

  //로그인
  async SignIn(loginInfo) {
    const { email, password } = loginInfo;

    //DB에서 유저정보 찾기
    const user = await User.findOne({ email, deletedAt: null });
    //입력한 비밀번호와 DB의 비밀번호 같은지 비교
    const isValidPassword = await bcrypt.compare(password, user.password);

    //만약 유저정보가 없거나 비밀번호가 동일하지 않다면
    if (!user || !isValidPassword) {
      const error = new Error("이메일 또는 비밀번호가 일치하지 않습니다.");
      error.status = 400;
      throw error;
    }

    //로그인 성공 후
    const accessToken = createAcessToken(user);
    const refreshToken = createRefreshToken(user);

    //새로 발급한 refreshToken을 DB 유저 스키마에 저장
    await User.findByIdAndUpdate(user._id, {
      refreshToken,
    });

    return {
      id: user?._id,
      name: user?.name,
      email: user?.email,
      zipcode: user?.zipcode,
      address: user?.address,
      detailAddress: user?.detailAddress,
      role: user?.role,
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  //특정 유저 정보 조회
  async GetUserById(userInfo) {
    const user = await User.findById(userInfo?.id);

    if (!user) {
      const error = new Error("유저 정보가 존재하지 않습니다.");
      error.status = 400;
      throw error;
    }

    return {
      id: user?._id,
      name: user?.name,
      email: user?.email,
      zipcode: user?.zipcode,
      address: user?.address,
      detailAddress: user?.detailAddress,
      role: user?.role,
      order: user?.order,
      product: user?.product,
    };
  }
}

module.exports = UserService;

//signUp
app.post("/signUp", async (req, res) => {
  // 폼에서 입력된 데이터 추출
  const { id, email, password, phone, zipcode, address, detailAddress, birth } =
    req.body;

  try {
    // 사용자 정보를 MongoDB에 저장
    const newUser = new User({
      id,
      email,
      password,
      phone,
      zipcode,
      address,
      detailAddress,
      birth,
    });

    await newUser.save();

    // 회원가입 성공 응답
    res.send("회원가입이 완료되었습니다.");
  } catch (error) {
    console.error("회원가입 중 오류 발생: ", error);

    // 오류 응답
    res.status(500).send("회원가입에 실패했습니다.");
  }
});

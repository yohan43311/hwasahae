const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.connect("");

let SignIn = require("./src/pages/SignUp");
let SignUp = require("./src/pages/SignIn");
let Payment = require("./src/pages/Payment");
let Find_idPw = require("./src/pages/Find_idPw");
let Cart = require("./src/pages/Cart");

router.get("/", function (req, res) {
  if (req.session.SignIn) {
    res.render("");
  } else {
    res.render("");
  }
});

dotenv.config({ path: ".env.local" }); //.env.local로 기본 경로 설정

// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express();

// 3000 포트로 서버 오픈
const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`start! express server on port ${port}`);
});

app.get("/", function (req, res) {
  res.send("<h1>hi friend!</h1>");
});

// request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:3000 브라우저에 res.sendFile() 내부의 파일이 띄워진다.

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get("/index", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

router.get("src/pages/SignIn", function (req, res) {
  res.render("signIn", { title: "Express" });
});

// app.get("/SignIn", function (req, res) {
//   res.sendFile(__dirname + "/pages/SignIn/signIn.html");
// });

app.use(express.static("public"));

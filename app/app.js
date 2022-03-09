"use strict";

const express = require('express');
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 경로 세팅
app.set("views", "./src/views");
// 템플릿 엔진 세팅
app.set("view engine", "ejs");

// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); // use => 미들웨어 등록 메서드.

module.exports = app;
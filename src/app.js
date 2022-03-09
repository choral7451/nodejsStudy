"use strict";

const express = require('express');
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 경로 세팅
app.set("views", "./views");
// 템플릿 엔진 세팅
app.set("view engine", "ejs");

app.use("/", home); // use => 미들웨어 등록 메서드.

module.exports = app;


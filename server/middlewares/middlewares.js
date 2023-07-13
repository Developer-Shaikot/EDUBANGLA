const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const middlewares = [
  cors({
    credentials: true,
    origin: "https://edu-bangla.onrender.com",
  }),
  cookieParser(),
  express.static("public"),
  express.json(),
  express.urlencoded({ extended: true }),
];

module.exports = (app) => {
  app.use(middlewares);
};

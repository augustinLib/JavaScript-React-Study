const config = require("./config/key.js");
const express = require("express");
const mongoose = require("mongoose");
const { Post } = require("./Model/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const moment = require("moment");
moment.locale("ko");

const app = express();
const port = 3000;
const MongoURL = config.mongoURI;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.locals.moment = moment;
  next();
});
app.use("/post", require("./Router/post.js"));
app.use(cookieParser());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));

app.get("/", (req, res) => {
  Post.find()
    .exec()
    .then((postData) => {
      res.render("index", { postData: postData });
    })
    .catch((err) => {
      console.log(err);
      res.render("index", { postData: [] });
    });
});

app.get("/session", (req, res) => {
  if (req.session.pageView) {
    req.session.pageView++;
  } else {
    req.session.pageView = 1;
  }
  res.send(`You visited this page ${req.session.pageView} times`);
});

app.get("/deleteSession", (req, res) => {
  req.session.destroy(() => {
    req.session;
  });
  res.redirect("/");
});
app.get("/getCookie", (req, res) => {
  res
    .cookie("cookie", "test", { signed: true, path: "/upload" })
    .render("index", { postData: [] });
});

app.get("/checkCookie", (req, res) => {
  console.log(req.signedCookies);
  res
    .clearCookie("cookie", { path: "/upload" })
    .render("index", { postData: [] });
});

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.all("*", (req, res) => {
  res.send("ERROR 404: Page not found");
});

mongoose
  .connect(MongoURL)
  .then(() => {
    console.log("mongoDB connected");
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

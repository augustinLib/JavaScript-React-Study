const config = require("./config.js");
const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const MongoURL = `mongodb+srv://orange-fritters:${encodeURIComponent(
  config.password
)}@cluster0.riwjvzg.mongodb.net/Express?retryWrites=true&w=majority`;

const moment = require("moment");
moment.locale("ko");
// var db, counter;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use((req, res, next) => {
  res.locals.moment = moment;
  next();
});

app.get("/", (req, res) => {
  res.render("index", { postData: [] });
});

app.get("/post/:postNum", (req, res) => {});

app.get("/post/edit/:postNum", (req, res) => {});

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.post("/post/edit", (req, res) => {});

app.post("/post/upload", (req, res) => {});

app.delete("/post/delete", (req, res) => {});

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

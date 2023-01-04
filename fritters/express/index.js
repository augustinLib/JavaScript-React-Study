const config = require("./config.js");
const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const MongoURL = `mongodb+srv://orange-fritters:${encodeURIComponent(
  config.password
)}@cluster0.riwjvzg.mongodb.net/Express?retryWrites=true&w=majority`;
const { Post } = require("./Model/post.js");
const { Counter } = require("./Model/counter.js");

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

app.get("/post/:postNum", (req, res) => {
  Post.findOne({ postNum: req.params.postNum })
    .exec()
    .then((docInfo) => {
      res.render("detail", { postInfo: docInfo });
    });
});

app.get("/post/edit/:postNum", (req, res) => {
  Post.findOne({ postNum: req.params.postNum })
    .exec()
    .then((docInfo) => {
      res.render("edit", { postInfo: docInfo });
    });
});

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.post("/post/edit", (req, res) => {
  Post.findOneAndUpdate(
    { postNum: req.body.postNum },
    {
      $set: {
        title: req.body.title,
        content: req.body.content,
      },
    }
  )
    .exec()
    .then(() => {
      res.redirect(`/post/${req.body.postNum}`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect(`/`);
    });
});

app.post("/post/upload", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
  };

  Counter.findOne({ name: "counter" })
    .exec()
    .then((counterInfo) => {
      temp.postNum = counterInfo.postNum;
      const NewPost = new Post(temp);
      NewPost.save().then(() => {
        Counter.findOneAndUpdate(
          { name: "counter" },
          {
            $inc: { postNum: 1 },
          }
        )
          .exec()
          .then(() => {
            res.redirect("/");
          });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("게시글 저장 실패");
    });
});

app.delete("/post/delete", (req, res) => {
  Post.deleteOne({ postNum: req.body.postNum })
    .exec()
    .then(() => {
      res.status(200).send("삭제성공");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("삭제실패");
    });
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

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
  // post
  //   .find()
  //   .toArray()
  //   .then((postData) => {
  //     res.render("index", { postData: postData });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

app.get("/post/:postNum", (req, res) => {
  // post.findOne({ _id: parseInt(req.params.postNum) }).then((doc) => {
  //   res.render("detail", { postInfo: doc });
  // });
});

app.get("/post/edit/:postNum", (req, res) => {
  // post.findOne({ _id: parseInt(req.params.postNum) }).then((doc) => {
  //   res.render("edit", { postInfo: doc });
  // });
});

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.post("/post/edit", (req, res) => {
  // post
  //   .findOneAndUpdate(
  //     { _id: parseInt(req.body.postNum) },
  //     {
  //       $set: {
  //         title: req.body.title,
  //         content: req.body.content,
  //       },
  //     }
  //   )
  //   .then(() => {
  //     res.redirect(`/post/${req.body.postNum}`);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.redirect("/");
  //   });
  // res.status(200);
});

app.post("/post/upload", (req, res) => {
  // counter
  //   .findOne({ name: "counter" })
  //   .then((counterInfo) => {
  //     post
  //       .insertOne({
  //         _id: counterInfo.postNum,
  //         title: req.body.title,
  //         content: req.body.content,
  //         date: new Date(),
  //       })
  //       .then(() => {
  //         counter
  //           .findOneAndUpdate(
  //             { name: "counter" },
  //             {
  //               $inc: { postNum: 1 },
  //             }
  //           )
  //           .then(() => {
  //             res.redirect("/");
  //           });
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.send("실패");
  //   });
});

app.delete("/post/delete", (req, res) => {
  // post
  //   .deleteOne({ _id: parseInt(req.body.postNum) })
  //   .then(() => {
  //     res.status(200).send({ message: "성공" });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(400).send({ message: "실패" });
  //   });
});

app.all("*", (req, res) => {
  res.send("ERROR 404: Page not found");
});

// MongoClient.connect(MongoURL, (err, database) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//     db = database.db("Express");
//     post = db.collection("post");
//     counter = db.collection("counter");
//   }
// });

var router = require("express").Router();

const { Post } = require("../Model/post.js");
const { Counter } = require("../Model/counter.js");
const multiparty = require("multiparty");

router.post("/upload", (req, res) => {
  const form = new multiparty.Form({
    uploadDir: "./public/image/",
  });
  const getName = (path) => {
    let arr = path.split("/");
    return arr[arr.length - 1];
  };

  form.parse(req, (err, fields, files) => {
    let temp = {
      title: fields.title[0],
      content: fields.content[0],
      image: getName(files.imgFile[0].path),
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

  // let temp = {
  //   title: req.body.title,
  //   content: req.body.content,
  // };

  // Counter.findOne({ name: "counter" })
  //   .exec()
  //   .then((counterInfo) => {
  //     temp.postNum = counterInfo.postNum;
  //     const NewPost = new Post(temp);
  //     NewPost.save().then(() => {
  //       Counter.findOneAndUpdate(
  //         { name: "counter" },
  //         {
  //           $inc: { postNum: 1 },
  //         }
  //       )
  //         .exec()
  //         .then(() => {
  //           res.redirect("/");
  //         });
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(400).send("게시글 저장 실패");
  //   });
});

router.get("/:postNum", (req, res) => {
  Post.findOne({ postNum: req.params.postNum })
    .exec()
    .then((docInfo) => {
      res.render("detail", { postInfo: docInfo });
    });
});

router.get("/edit/:postNum", (req, res) => {
  Post.findOne({ postNum: req.params.postNum })
    .exec()
    .then((docInfo) => {
      res.render("edit", { postInfo: docInfo });
    });
});

router.post("/edit", (req, res) => {
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
      res.redirect(`/`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect(`/`);
    });
});

router.delete("/delete", (req, res) => {
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

module.exports = router;

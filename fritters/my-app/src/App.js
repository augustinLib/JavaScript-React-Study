import React, { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "author1",
    content: "content1",
    emotion: 1,
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    author: "author2",
    content: "content2",
    emotion: 2,
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    author: "author3",
    content: "content3",
    emotion: 3,
    createdDate: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;

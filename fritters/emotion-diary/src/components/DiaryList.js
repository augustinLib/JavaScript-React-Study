import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "latest", text: "최신순" },
  { value: "oldest", text: "오래된순" },
];

const filterOptionList = [
  { value: "all", text: "전체" },
  { value: "happy", text: "행복" },
  { value: "sad", text: "슬픔" },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className={"ControlMenu"}
      value={value}
      onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option value={it.value} key={idx}>
          {it.text}
        </option>
      ))}
    </select>
  );
});

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filterState, setFilterState] = useState("all");

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(a.date) - parseInt(b.date);
      } else {
        return parseInt(b.date) - parseInt(a.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filterState === "all"
        ? copyList
        : copyList.filter((it) =>
            filterState === "happy"
              ? parseInt(it.emotion) < 3
              : parseInt(it.emotion) >= 3
          );
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filterState}
            onChange={setFilterState}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"NEW"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((item) => (
        <DiaryItem key={item.id} {...item}></DiaryItem>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;

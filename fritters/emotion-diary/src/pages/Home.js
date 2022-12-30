import { useState, useContext, useEffect } from "react";

import { DiaryStateContext } from "./../App";
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  // console.log("diary List", diaryList);
  console.log("diary List", useContext(DiaryStateContext));

  const [data, setData] = useState([diaryList]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const year = curDate.getFullYear();
      const month = curDate.getMonth();

      const firstDay = new Date(year, month, 1).getTime();
      const lastDay = new Date(year, month + 1, 0).getTime();

      setData(
        diaryList.filter((item) => {
          return item.date >= firstDay && item.date <= lastDay;
        })
      );
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1));
  };
  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1));
  };
  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;

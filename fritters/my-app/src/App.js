import React, {
  useRef,
  useEffect,
  useCallback,
  useReducer,
  useMemo,
} from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const reducer = function (state, action) {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const createdDate = new Date().getTime();
      const newItem = {
        ...action.data,
        createdDate,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  async function getData() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    console.log(res);

    const initData = res.slice(0, 20).map(function (it) {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    dispatch({ type: "INIT", data: initData });
  }

  useEffect(function () {
    getData();
  }, []);

  const onCreate = useCallback(function (author, content, emotion) {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onRemove = useCallback(function (targetId) {
    dispatch({ type: "REMOVE", data: targetId });
  }, []);

  const onEdit = useCallback(function (targetId, newContent) {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  const getDiaryAnalysis = useMemo(
    function () {
      const goodCount = data.filter((it) => it.emotion >= 3).length;
      const badCount = data.length - goodCount;
      const goodRatio = (goodCount / data.length) * 100;
      return { goodCount, badCount, goodRatio };
    },
    [data.length]
  );
  // returns callback function's return value as an object

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  const memoizedDispatch = useMemo(function () {
    return { onCreate, onRemove, onEdit };
  }, []);

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatch}>
        <div className="App">
          <DiaryEditor onCreate={onCreate} />
          <br />
          <div>전체 일기: {data.length}</div>
          <div>긍정 일기: {goodCount}</div>
          <div>부정 일기: {badCount}</div>
          <div>긍정 비율: {goodRatio.toFixed(2)}%</div>
          <DiaryList onEdit={onEdit} onRemove={onRemove} />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;

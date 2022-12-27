import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, onEdit, diaryList }) => {
  return (
    <div className="DiaryList" align="center">
      <h2>일기 목록</h2>
      <h3>{diaryList.length}개의 일기가 있습니다</h3>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;

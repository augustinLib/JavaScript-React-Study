const DiaryItem = ({ author, content, createdDate, emotion, id }) => {
  return (
    <div className="DiaryItem">
      <div key={id} className="info">
        <span>
          작성자 {author} | 감정점수 {emotion}
        </span>
        <br />
        <span className="date">{new Date(createdDate).toLocaleString()}</span>
        <br />
      </div>
      <div className="content">{content}</div>
    </div>
  );
};
export default DiaryItem;

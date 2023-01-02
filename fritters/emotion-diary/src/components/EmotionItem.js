import React from "react";

const EmotionItem = ({
  emotionId,
  emotionImg,
  emotionDesc,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotionId)}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on${emotionId}` : `EmotionItem_off`,
      ].join(" ")}>
      <img src={emotionImg} />
      <span>{emotionDesc}</span>
    </div>
  );
};

export default React.memo(EmotionItem);

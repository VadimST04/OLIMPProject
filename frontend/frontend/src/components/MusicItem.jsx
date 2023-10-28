import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const MusicItem = ({
  language,
  isLiked,
  image,
  title,
  author,
  length,
  lyrics,
  onClickHandler,
}) => {
  return (
    <div
      onClick={() => onClickHandler(lyrics, language, image, title, author)}
      className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl bg-[#DBDBDB] p-2 transition-all duration-200 hover:bg-[#A9A9A9] dark:bg-[#737373] dark:hover:bg-soft-black-hover"
    >
      <div className="flex w-full items-center justify-between font-semibold">
        {language}
        <AiOutlineHeart className="cursor-pointer text-[20px]" />
      </div>
      <div className="h-24 w-24 overflow-hidden rounded-full">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="w-full truncate text-center font-semibold">{title}</p>
      <p className="w-full truncate text-center text-[14px]">{author}</p>
      <p className="w-full truncate text-center text-[14px]">{length}</p>
    </div>
  );
};

export default MusicItem;

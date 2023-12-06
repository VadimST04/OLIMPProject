import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { SIGN_IN_FORM_OPEN } from "../store/constants/fromsConstants";
import { useDispatch, useSelector } from "react-redux";
import ImageLoader from "./ImageLoader";

const MusicItem = ({
  musicId,
  language,
  isLiked,
  image,
  title,
  artist,
  length,
  lyrics,
  onClickHandler,
}) => {
  const { userToken } = useSelector((state) => state.userToken);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        if (!userToken) {
          dispatch({ type: SIGN_IN_FORM_OPEN });
          return;
        }
        onClickHandler(musicId, lyrics, language, image, title, artist, length);
      }}
      className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl bg-[#DBDBDB] p-2 transition-all duration-200 hover:bg-[#A9A9A9] dark:bg-[#737373] dark:hover:bg-soft-black-hover"
    >
      <div className="flex w-full items-center justify-between font-semibold">
        {language}
        <AiOutlineHeart className="cursor-pointer text-[20px]" />
      </div>
      <div className="h-24 w-24 overflow-hidden rounded-full">
        <ImageLoader src={image} />
      </div>
      <p className="w-full truncate text-center font-semibold">{title}</p>
      <p className="w-full truncate text-center text-[14px]">{artist}</p>
      <p className="w-full truncate text-center text-[14px]">{length}</p>
    </div>
  );
};

export const MusicItemSkeleton = () => {
  return (
    <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl bg-[#DBDBDB] p-2 transition-all duration-200 hover:bg-[#A9A9A9] dark:bg-[#737373] dark:hover:bg-soft-black-hover">
      <div className="flex w-full items-center justify-between font-semibold"></div>
      <div className="h-24 w-24 overflow-hidden rounded-full">
        <div
          className={`h-full w-full animate-[pulse_1s_ease-in-out_infinite] bg-soft-black dark:bg-soft-white`}
        ></div>
      </div>
      <div className="mt-3 flex h-1 w-full gap-2">
        <p className="h-1 w-[20%] truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[40%] truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[30%] truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-full truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
      </div>
      <div className="mt-3 flex h-1 w-full gap-2">
        <p className="h-1 w-[20%] truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[40%] truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-full truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[30%] truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
      </div>
      <div className="mt-3 flex h-1 w-full gap-2">
        <p className="h-1 w-[40%] truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[30%] truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-full truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[20%] truncate rounded-full bg-soft-black text-center font-semibold dark:bg-soft-white"></p>
      </div>
    </div>
  );
};

export default MusicItem;

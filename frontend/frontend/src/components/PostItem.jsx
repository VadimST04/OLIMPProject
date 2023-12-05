import React, { useState } from "react";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { LuArrowDownSquare } from "react-icons/lu";
import DetailedPost from "./DetailedPost";
import ImageLoader from "./ImageLoader";
import ImageCarousel from "./ImageCarousel";

const PostItem = ({
  liked,
  images,
  username,
  content,
  likes,
  comments,
  commentDate,
  userImage,
}) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [detailedView, setDetailedView] = useState(false);

  return (
    <>
      <div className="mx-auto grid h-full w-full max-w-[28rem] flex-shrink-0 grid-rows-[3rem,1fr,3rem,auto] gap-1">
        <div className="grid grid-cols-[3rem,1fr] gap-2">
          <div className="aspect-square h-full flex-shrink-0 overflow-hidden rounded-full">
            <ImageLoader src={userImage} />
          </div>
          <p className="w-full self-center truncate">{username}</p>
        </div>

        <div className="mt-2 cursor-default overflow-hidden rounded-md">
          <ImageCarousel images={images} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <AiOutlineHeart className="cursor-pointer text-[32px] transition-all duration-150 hover:scale-110" />
            <BiComment className="cursor-pointer text-3xl transition-all duration-150 hover:scale-110" />
            <AiOutlineSend className="-translate-y-1 -rotate-45 cursor-pointer text-3xl transition-all duration-150 hover:scale-110" />
          </div>
          <LuArrowDownSquare className="cursor-pointer text-3xl transition-all duration-150 hover:scale-110" />
        </div>

        <div
          onClick={() => setDetailedView(true)}
          className="line-clamp-3 max-h-[4.5rem] cursor-pointer hover:underline"
        >
          {content}
        </div>
      </div>

      {detailedView && (
        <DetailedPost
          userImage={userImage}
          images={images}
          likes={likes}
          comments={comments}
          content={content}
          closePostCallback={() => setDetailedView(false)}
          commentDate={commentDate}
          username={username}
        />
      )}
    </>
  );
};

export const PostItemSkeleton = () => {
  return (
    <div className="mx-auto grid h-full w-full max-w-[28rem] flex-shrink-0 grid-rows-[3rem,1fr,3rem,auto] gap-3">
      <div className="grid grid-cols-[3rem,1fr] gap-2">
        <div className="aspect-square h-full flex-shrink-0 overflow-hidden rounded-full">
          <div
            className={`h-full w-full animate-[pulse_1s_ease-in-out_infinite] bg-soft-black dark:bg-soft-white`}
          ></div>
        </div>
        <div className="flex gap-2">
          <p className="h-1 w-full animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
          <p className="h-1 w-[50%] animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
        </div>
      </div>

      <div className="h-full w-full animate-[pulse_1s_ease-in-out_infinite] rounded-md bg-soft-black dark:bg-soft-white"></div>

      <div className="space-y-2">
        <div className="flex gap-2">
          <p className="h-1 w-full animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
          <p className="h-1 w-[30%] animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
          <p className="h-1 w-[50%] animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
        </div>
        <div className="flex gap-2">
          <p className="h-1 w-[50%] animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
          <p className="h-1 w-[30%] animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
          <p className="h-1 w-full animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
        </div>
        <div className="flex gap-2">
          <p className="h-1 w-full animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
          <p className="h-1 w-[50%] animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
          <p className="h-1 w-[30%] animate-[pulse_1s_ease-in-out_infinite] self-center truncate rounded-full bg-soft-black dark:bg-soft-white"></p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;

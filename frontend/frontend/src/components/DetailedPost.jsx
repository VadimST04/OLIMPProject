import React, { useRef, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { LuArrowDownSquare } from "react-icons/lu";
import CommentItem from "./CommentItem";
import { RxCross1 } from "react-icons/rx";
import ImageCarousel from "./ImageCarousel";
import ImageLoader from "./ImageLoader";

const DetailedPost = ({
  images,
  likes,
  comments,
  content,
  closePostCallback,
  commentDate,
  username,
  userImage,
}) => {
  const postBg = useRef(null);

  const closePost = (e) => {
    if (e.target === postBg.current) closePostCallback();
  };

  console.log(comments);

  return (
    <div
      ref={postBg}
      onClick={(e) => closePost(e)}
      className="absolute left-0 top-0 z-10 flex h-full min-h-0 w-full items-center justify-center overflow-hidden bg-black/80"
    >
      <div className="hidden h-[70%] w-[90%] max-w-[64rem] grid-cols-2 gap-5 bg-soft-white p-10 dark:bg-soft-black sm:grid">
        <div className="overflow-hidden rounded-md">
          <ImageCarousel images={images} />
        </div>
        <div className="grid min-h-0 grid-rows-[1fr,3rem] gap-5">
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col gap-2 pb-5">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <ImageLoader src={userImage} />
                </div>
                <p className="w-full items-center truncate">{username}</p>
              </div>
              {content}
            </div>

            {comments?.length < 1 && (
              <div className="flex items-center justify-center text-xl">
                No comments yet...
              </div>
            )}

            {comments?.map((item, index) => (
              <CommentItem
                key={index}
                profileImg={`data:image/jpeg;base64,${item.user_image}`}
                commentContent={item.text}
                username={item.user}
              />
            ))}
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              className="h-full w-full rounded-md bg-[#D9D9D9] px-3 pr-[3.5rem] outline-none dark:bg-soft-black-hover"
              placeholder="Add a comment..."
            />
            <button className="absolute right-3 h-full cursor-pointer font-semibold text-main-green dark:brightness-150">
              Send
            </button>
          </div>
        </div>
      </div>
      <>
        <div className="grid h-[75%] min-h-0 w-[95%] max-w-[64rem] grid-rows-[1fr,3rem] gap-3 bg-soft-white p-3 dark:bg-soft-black sm:hidden">
          <div className="h-full overflow-y-auto">
            <div className="h-full w-full gap-2 overflow-hidden rounded-md">
              <ImageCarousel images={images} />
            </div>
            <div className="flex flex-col gap-2 py-5">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <ImageLoader src={userImage} />
                </div>
                <p className="w-full items-center truncate">{username}</p>
              </div>
              {content}
            </div>

            {comments?.length < 1 && (
              <div className="flex items-center justify-center text-xl">
                No comments yet...
              </div>
            )}
            {comments?.map((item, index) => (
              <CommentItem
                key={index}
                profileImg={`data:image/jpeg;base64,${item.user_image}`}
                commentContent={item.text}
                username={item.user}
              />
            ))}
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              className="h-full w-full rounded-md bg-[#D9D9D9] px-3 pr-[3.5rem] outline-none dark:bg-soft-black-hover"
              placeholder="Add a comment..."
            />
            <button className="absolute right-3 h-full cursor-pointer font-semibold text-main-green dark:brightness-125">
              Send
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default DetailedPost;

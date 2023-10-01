import React, { useRef, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { LuArrowDownSquare } from "react-icons/lu";
const DetailedPost = ({
  images,
  likes,
  comments,
  content,
  closePostCallback,
}) => {
  const postBg = useRef(null);
  const closePost = (e) => {
    if (e.target === postBg.current) closePostCallback();
  };
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <div
      ref={postBg}
      onClick={(e) => closePost(e)}
      className="absolute left-0 top-0 z-10 flex h-screen min-h-0 w-screen items-center justify-center overflow-y-auto bg-black bg-opacity-80"
    >
      <div className="flex">
        <div className="flex w-[24rem] flex-col gap-2 bg-soft-white">
          <img
            src={images[activeImgIndex]}
            alt=""
            className={
              "h-[32rem] w-full cursor-pointer select-none object-cover"
            }
          />
          <div className="space-y-1 text-main-green">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <div className="flex cursor-pointer select-none items-center text-center font-bold hover:text-main-dark-green">
                  <AiOutlineHeart className="text-[28px]" />
                  <p>{likes}</p>
                </div>
                <div className="flex cursor-pointer select-none items-center text-center font-bold hover:text-main-dark-green">
                  <BiComment className="text-[26px] " />
                  <p>{comments.length}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiSend className="cursor-pointer text-[25px] hover:text-main-dark-green" />
                <LuArrowDownSquare className="cursor-pointer text-[27px] hover:text-main-dark-green" />
              </div>
            </div>
            <p className="max-h-32 overflow-y-auto p-1 text-[14px] font-semibold">
              {content}
            </p>
          </div>
        </div>
        <div className="w-[24rem] flex-shrink-0 bg-soft-white"></div>
      </div>
    </div>
  );
};

export default DetailedPost;

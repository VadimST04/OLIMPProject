import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { LuArrowDownSquare } from "react-icons/lu";
import DetailedPost from "./DetailedPost";

const PostItem = ({ liked, images, username, content, likes, comments }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [detailedView, setDetailedView] = useState(false);

  return (
    <div className="flex w-[32rem] flex-col">
      <div
        className={"flex h-full items-center".concat(
          images.length > 1 ? " justify-between" : " justify-center",
        )}
      >
        {images.length > 1 && (
          <BsArrowLeftCircle
            onClick={() =>
              setActiveImgIndex(
                (activeImgIndex - 1 + images.length) % images.length,
              )
            }
            className="cursor-pointer select-none text-[32px] text-main-green hover:text-main-dark-green dark:text-soft-white dark:hover:text-[#B3B3B3]"
          />
        )}

        <div className="flex h-full w-[24rem] flex-col gap-2">
          <img
            src={images[activeImgIndex].image}
            alt=""
            className={
              "h-[31rem] w-full cursor-pointer select-none object-cover"
            }
            onClick={() => setDetailedView(true)}
          />
          <div className="space-y-1 text-main-green dark:text-soft-white">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <div className="flex cursor-pointer select-none items-center text-center font-bold hover:text-main-dark-green dark:hover:text-[#B3B3B3]">
                  <AiOutlineHeart className="text-[28px]" />
                  <p>{likes}</p>
                </div>
                <div className="flex cursor-pointer select-none items-center text-center font-bold hover:text-main-dark-green dark:hover:text-[#B3B3B3]">
                  <BiComment className="text-[26px] " />
                  <p>{comments.length}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiSend className="cursor-pointer text-[25px] hover:text-main-dark-green dark:hover:text-[#B3B3B3]" />
                <LuArrowDownSquare className="cursor-pointer text-[27px] hover:text-main-dark-green dark:hover:text-[#B3B3B3]" />
              </div>
            </div>
            <p
              onClick={() => setDetailedView(true)}
              className="line-clamp-3 cursor-pointer text-[14px] font-semibold hover:underline"
            >
              {content}
            </p>
          </div>
        </div>
        {images.length > 1 && (
          <BsArrowRightCircle
            onClick={() =>
              setActiveImgIndex((activeImgIndex + 1) % images.length)
            }
            className="cursor-pointer select-none text-[32px] text-main-green hover:text-main-dark-green dark:text-soft-white dark:hover:text-[#B3B3B3]"
          />
        )}
      </div>
      {detailedView && (
        <DetailedPost
          closePostCallback={() => setDetailedView(false)}
          images={images}
          likes={likes}
          comments={comments}
          content={content}
        />
      )}
    </div>
  );
};

export default PostItem;

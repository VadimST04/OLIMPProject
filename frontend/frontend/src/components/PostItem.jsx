import React, { useState } from "react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsFillSuitHeartFill,
  BsSend,
  BsBoxArrowInDown,
  BsFillSendFill,
  BiSolidComment,
} from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { LuArrowDownSquare } from "react-icons/lu";
const PostItem = ({
  id,
  liked,
  images,
  username,
  content,
  likes,
  comments,
}) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

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
            className="cursor-pointer select-none text-[32px] text-main-green hover:text-main-dark-green"
          />
        )}

        <div className="flex h-full w-[24rem] flex-col gap-2">
          <img
            src={images[activeImgIndex]}
            alt=""
            className={"h-[31rem] w-full object-cover"}
          />
          <div className="space-y-1 text-main-green">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <AiOutlineHeart className="cursor-pointer text-[24px] hover:text-main-dark-green" />
                <BiComment className="cursor-pointer text-[22px] hover:text-main-dark-green" />
                <FiSend className="cursor-pointer text-[22px] hover:text-main-dark-green" />
              </div>
              <LuArrowDownSquare className="cursor-pointer text-[25px] hover:text-main-dark-green" />
            </div>
            <p className="line-clamp-3 text-[14px]">{content}</p>
          </div>
        </div>
        {images.length > 1 && (
          <BsArrowRightCircle
            onClick={() =>
              setActiveImgIndex((activeImgIndex + 1) % images.length)
            }
            className="cursor-pointer select-none text-[32px] text-main-green hover:text-main-dark-green"
          />
        )}
      </div>
    </div>
  );
};

export default PostItem;

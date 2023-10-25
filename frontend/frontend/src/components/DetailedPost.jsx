import React, { useRef, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { LuArrowDownSquare } from "react-icons/lu";
import CommentItem from "./CommentItem";
import { RxCross1 } from "react-icons/rx";

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
  console.log(comments);

  const testComments = [
    {
      profileImg:
        "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      commentDate: "Aug 30, 20203",
      username: "user1",
      commentContent: "Nice cars!",
    },
    {
      profileImg:
        "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      commentDate: "Aug 30, 20203",
      username: "user2",
      commentContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia repellendus modi, officia voluptas reiciendis accusamus et distinctio laudantium aut esse sit est odit dolorem quibusdam corporis libero autem delectus.",
    },
    {
      profileImg:
        "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      commentDate: "Aug 30, 20203",
      username: "user3",
      commentContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia repellendus modi, officia voluptas reiciendis accusamus et distinctio laudantium aut esse sit est odit dolorem quibusdam corporis libero autem delectus.",
    },
    {
      profileImg:
        "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02",
      commentDate: "Aug 30, 20203",
      username: "user4",
      commentContent: "Lorem ipsum dolor sit amet consecteturrrrrr",
    },
  ];

  return (
    <div
      ref={postBg}
      onClick={(e) => closePost(e)}
      className="absolute left-0 top-0 z-10 flex h-screen min-h-0 w-screen items-center justify-center overflow-y-auto bg-black bg-opacity-80"
    >
      <div className="relative flex gap-4 rounded-md bg-soft-white p-5 text-soft-black dark:bg-soft-black dark:text-soft-white">
        <div className="absolute -right-6 -top-6 z-10 cursor-pointer text-[20px] text-soft-white">
          <RxCross1 className="" onClick={() => closePostCallback()} />
        </div>
        {/* Post */}
        <div className="flex w-[29rem] flex-col">
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
                className="cursor-pointer select-none text-[32px] hover:text-[#666666]"
              />
            )}

            <div className="flex h-full w-[24rem] flex-col gap-2">
              <img
                src={images[activeImgIndex].image}
                alt=""
                className={
                  "h-[31rem] w-full cursor-pointer select-none object-cover"
                }
              />
              <div className="space-y-1 ">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <div className="flex cursor-pointer select-none items-center text-center font-bold hover:text-[#666666]">
                      <AiOutlineHeart className="text-[28px]" />
                      <p>{likes}</p>
                    </div>
                    <div className="flex cursor-pointer select-none items-center text-center font-bold hover:text-[#666666]">
                      <BiComment className="text-[26px] " />
                      <p>{comments.length}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiSend className="cursor-pointer text-[25px] hover:text-[#666666]" />
                    <LuArrowDownSquare className="cursor-pointer text-[27px] hover:text-[#666666]" />
                  </div>
                </div>
              </div>
            </div>
            {images.length > 1 && (
              <BsArrowRightCircle
                onClick={() =>
                  setActiveImgIndex((activeImgIndex + 1) % images.length)
                }
                className="cursor-pointer select-none text-[32px]  hover:text-[#666666]"
              />
            )}
          </div>
        </div>
        {/* Comments */}
        <div className="w-[24rem]  ">
          {testComments.map((item, index) => (
            <CommentItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedPost;

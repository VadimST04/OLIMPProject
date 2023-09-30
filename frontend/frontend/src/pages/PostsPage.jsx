import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsList } from "../store/actions/postsActions";
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

function PostsPage() {
  // const dispatch = useDispatch();

  // const { posts } = useSelector((state) => state.postsList);
  // console.log(posts);

  // useEffect(() => {
  //   dispatch(postsList());
  // }, [dispatch]);
  const posts = [
    {
      id: 1,
      liked: false,
      currentImageIndex: 1,
      images: [
        "https://images.unsplash.com/photo-1695754189866-f2f8eae7328d",
        "https://images.unsplash.com/photo-1675703236969-e4ce4d298618",
      ],
      username: "user1",
      content:
        "Exploring the beauty and history of museum today. This piece caught my eye with its stunning colors and intricate details🎨 #art #museum #culture",
      likes: 984,
      comments: 132,
    },
    {
      id: 2,
      liked: false,
      currentImageIndex: 0,
      images: [
        "https://images.unsplash.com/photo-1695754189866-f2f8eae7328d",
        "https://images.unsplash.com/photo-1675703236969-e4ce4d298618",
      ],
      username: "user1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias veritatis nam doloribus perspiciatis, modi, atque quasi minus deleniti ipsa optio sit autem maxime ut ex voluptates excepturi repudiandae beatae dolorum mollitia dignissimos a iusto! Inventore aut cupiditate perspiciatis aliquam placeat omnis non obcaecati debitis, id quaerat commodi sequi. Ratione sapiente enim praesentium, corporis maxime voluptatum ab quam, nihil natus officia totam alias sequi laudantium. Odit voluptatum corrupti esse autem aut impedit, vel sunt quidem qui maiores debitis libero eaque, quis culpa harum quisquam possimus. Eaque perferendis reiciendis magni corrupti earum aliquam adipisci. Fugit sequi fugiat eveniet non, cumque laudantium?",
      likes: 984,
      comments: 132,
    },
    {
      id: 3,
      liked: false,
      currentImageIndex: 0,
      images: ["https://images.unsplash.com/photo-1695754189866-f2f8eae7328d"],
      username: "user1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, minus.",
      likes: 984,
      comments: 132,
    },
  ];

  return (
    <div className="flex h-full flex-col items-center gap-5">
      {posts.map((item) => (
        <div key={item.id} className="flex w-[32rem] flex-col">
          <div
            className={"flex h-full items-center".concat(
              item.images.length > 1 ? " justify-between" : " justify-center",
            )}
          >
            {item.images.length > 1 && (
              <BsArrowLeftCircle className="cursor-pointer text-[32px] text-main-green hover:text-main-dark-green" />
            )}

            <div className="flex h-full w-[24rem] flex-col gap-2">
              <img
                src={item.images[item.currentImageIndex]}
                alt=""
                className={"h-full w-full object-cover"}
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
                <p className="line-clamp-3 text-[14px]">{item.content}</p>
              </div>
            </div>
            {item.images.length > 1 && (
              <BsArrowRightCircle className="cursor-pointer text-[32px] text-main-green hover:text-main-dark-green" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsPage;

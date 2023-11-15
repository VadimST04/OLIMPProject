import React, { useState } from "react";
import { BiImage } from "react-icons/bi";
import { MdCreate } from "react-icons/md";
import { PiGridFour } from "react-icons/pi";
import { useNavigate } from "react-router";

const PostsNavbar = ({}) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(
    sessionStorage.getItem("postNavbarActiveButton")
      ? sessionStorage.getItem("postNavbarActiveButton")
      : 0,
  );
  const activeButtonStyle =
    "bg-soft-black hover:bg-soft-black-hover text-soft-white";
  const buttonStyle = "";
  const navigate = useNavigate();
  const buttons = [
    {
      title: "All posts",
      icon: <PiGridFour />,
      link: "/posts",
    },
    {
      title: "My posts",
      icon: <BiImage />,
      link: "/posts",
    },
    {
      title: "Create post",
      icon: <MdCreate />,
      link: "/posts/post-creation",
    },
  ];

  return (
    <div className="flex w-full flex-wrap items-center justify-evenly gap-2 font-semibold text-soft-black">
      {buttons.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveButtonIndex(index);
            sessionStorage.setItem("postNavbarActiveButton", index);
            navigate(item.link);
          }}
          className="flex w-[5rem] items-center justify-center gap-1 rounded-xl bg-[#D9D9D9] px-4 py-2 hover:bg-[#BEBEBE] md:w-[12rem]"
        >
          {item.icon}
          <span className="hidden md:inline">{item.title}</span>
        </button>
      ))}
    </div>
  );
};

export default PostsNavbar;

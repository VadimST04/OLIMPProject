import React, { useState } from "react";
import ChatItem from "./ChatItem";
import { useSelector } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";

const Chats = () => {
  const { userProfile } = useSelector((state) => state.userProfile);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [chatsCollapsed, setChatsCollapsed] = useState(false);
  const collapseButtonRotation = chatsCollapsed ? "rotate-180" : "";
  const chatsWidth = !chatsCollapsed ? "w-[22rem]" : "w-0";

  const testImg =
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg";

  const testChats = [
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { img: testImg, name: "Lorem", lastMessage: "lorem XD" },
  ];

  return (
    <div
      className={`relative flex items-center transition-all duration-500 ${
        !chatsCollapsed ? "px-6" : ""
      }`}
    >
      <div
        onClick={() => setChatsCollapsed(!chatsCollapsed)}
        className="absolute -left-4 cursor-pointer rounded-full bg-main-green p-1 text-[24px] text-soft-white hover:bg-main-dark-green dark:text-soft-white"
      >
        <AiOutlineRight
          className={`transition-transform duration-500 ${collapseButtonRotation}`}
        />
      </div>

      <div
        className={`h-full flex-shrink-0 space-y-1 overflow-y-auto overflow-x-hidden text-soft-black transition-all duration-500 ${chatsWidth} ${
          !chatsCollapsed ? "pr-2" : ""
        }`}
      >
        {testChats.length === 0 && userProfile && (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex w-full cursor-pointer select-none items-center justify-center gap-2 rounded-md border border-transparent bg-main-green p-5 text-soft-white">
              You don't have any chats yet
            </div>
          </div>
        )}
        {!userProfile && (
          <div className="flex h-full w-full items-center justify-center dark:text-soft-white">
            <p className="text-[20px] font-semibold">Log in to use chats</p>
          </div>
        )}
        {userProfile &&
          testChats.map((item, index) => (
            <ChatItem
              key={index}
              isActive={index === activeChatIndex}
              clickCallback={() => setActiveChatIndex(index)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Chats;

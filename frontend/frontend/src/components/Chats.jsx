import React, { useState } from "react";
import ChatItem from "./ChatItem";
import { useSelector } from "react-redux";
import { BsCaretRight } from "react-icons/bs";

const Chats = () => {
  const { userProfile } = useSelector((state) => state.userProfile);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [chatsCollapsed, setChatsCollapsed] = useState(false);
  const collapseButtonRotation = chatsCollapsed ? "rotate-180" : "";
  const chatsWidth = !chatsCollapsed ? "w-[22rem]" : "w-0";

  const testImg =
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg";
  const chats = [
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
      className={`relative flex items-center transition-all duration-300 ${
        !chatsCollapsed ? "px-6" : ""
      }`}
    >
      <div
        onClick={() => setChatsCollapsed(!chatsCollapsed)}
        className="absolute -left-4 cursor-pointer text-[32px] dark:text-soft-white"
      >
        <BsCaretRight
          className={`transition-all duration-300 group-hover:scale-110 ${collapseButtonRotation}`}
        />
      </div>

      <div
        className={`h-full flex-shrink-0 space-y-1 overflow-y-auto text-soft-black transition-all duration-300 ${chatsWidth} ${
          !chatsCollapsed ? "pr-2" : ""
        }`}
      >
        {chats.length === 0 && userProfile && (
          <div className="flex h-full w-full items-center justify-center">
            <div
              className={`flex w-full cursor-pointer select-none items-center justify-center gap-2 rounded-md border border-transparent bg-main-green p-5 text-soft-white`}
            >
              You don't have any chats yet
            </div>
          </div>
        )}
        {!true && (
          <div className="flex h-full w-full items-center justify-center dark:text-soft-white">
            <p className="text-[20px] font-semibold">Log in to use chats</p>
          </div>
        )}
        {true &&
          chats.map((item, index) => (
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

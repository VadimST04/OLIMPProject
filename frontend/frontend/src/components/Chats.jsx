import React, { useState } from "react";
import ChatItem from "./ChatItem";

const Chats = () => {
  const [activeChatIndex, setActiveChatIndex] = useState(0);
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
    <div className="w-[22rem] flex-shrink-0 overflow-y-auto px-1">
      {chats.length === 0 && (
        <div className="flex h-full w-full items-center justify-center">
          <div
            className={`flex w-full cursor-pointer select-none items-center justify-center gap-2 rounded-md border border-transparent bg-main-green p-5 text-soft-white transition-all duration-100`}
          >
            You don't have any chats yet
          </div>
        </div>
      )}
      {chats.map((item, index) => (
        <ChatItem
          key={index}
          isActive={index === activeChatIndex}
          clickCallback={() => setActiveChatIndex(index)}
          {...item}
        />
      ))}
    </div>
  );
};

export default Chats;

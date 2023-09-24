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
  ];

  return (
    <div className="w-72 flex-shrink-0 overflow-y-auto py-[0.6rem]">
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

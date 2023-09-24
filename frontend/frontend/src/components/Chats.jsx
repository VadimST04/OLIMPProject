import React from "react";
import ChatItem from "./ChatItem";

const Chats = () => {
  const testImg =
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg";
  const chats = [
    { id: 1, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { id: 2, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { id: 3, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { id: 4, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { id: 5, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { id: 6, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { id: 7, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { id: 8, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { id: 9, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
    { id: 10, img: testImg, name: "Lorem", lastMessage: "lorem XD" },
  ];

  return (
    <div className="w-72 flex-shrink-0 overflow-y-auto bg-red-400">
      {chats.map((item) => (
        <ChatItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Chats;

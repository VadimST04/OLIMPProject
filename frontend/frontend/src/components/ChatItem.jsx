import React from "react";

const ChatItem = ({ id, img, name, lastMessage }) => {
  return (
    <div className="flex w-full cursor-pointer items-center gap-2 bg-[#EFEFEF] p-2 hover:bg-[#DCDCDC]">
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <img src={img} alt="" className="object-cover" />
      </div>
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-[14px] text-gray-500">{lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;

import React from "react";

const ChatItem = ({ img, name, lastMessage, isActive, clickCallback }) => {
  const activeBg = isActive ? "bg-main-green" : "";
  const activeText = isActive ? "text-soft-white" : "text-soft-dark";

  return (
    <div
      onClick={() => clickCallback()}
      className={`hover:border-main-green flex w-full cursor-pointer select-none items-center gap-2 rounded-md border border-transparent p-2 transition-all duration-100 ${activeBg} ${activeText}`}
    >
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <img src={img} alt="" className="object-cover" />
      </div>
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-[14px]">{lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;

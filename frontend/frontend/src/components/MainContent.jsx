import React, { useState } from "react";
import { Outlet } from "react-router";
import Chats from "./Chats";

const MainContent = () => {
  const [isLeftSideChats, setLeftSideChats] = useState(false);
  const leftSideChats = isLeftSideChats ? "flex-row-reverse" : "";

  return (
    <div
      className={`flex h-full min-h-0 gap-5 bg-[#F3F3F3] p-5 ${leftSideChats}`}
    >
      <Outlet />
      <Chats />
    </div>
  );
};

export default MainContent;

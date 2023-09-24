import React, { useState } from "react";
import { Outlet } from "react-router";
import Chats from "./Chats";

const MainContent = () => {
  const [isLeftSideChats, setLeftSideChats] = useState(false);
  const leftSideChats = isLeftSideChats ? "flex-row-reverse" : "";
  return (
    <div className={`flex gap-5 p-5 h-full min-h-0 ${leftSideChats}`}>
      <Outlet />
      <Chats />
    </div>
  );
};

export default MainContent;

import React, { useState } from "react";
import { Outlet } from "react-router";
import Chats from "./Chats";

const MainContent = () => {
  const [isLeftSideChats, setLeftSideChats] = useState(false);
  const leftSideChats = isLeftSideChats ? "flex-row-reverse" : "";

  return (
    <div
      className={`flex flex-grow gap-5 overflow-hidden bg-soft-white p-5 text-soft-black dark:bg-soft-black dark:text-soft-white ${leftSideChats}`}
    >
      <div className="flex-grow overflow-y-auto pr-2">
        <Outlet />
      </div>
      <Chats />
    </div>
  );
};

export default MainContent;

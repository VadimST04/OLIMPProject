import React, { useState } from "react";
import { Outlet } from "react-router";
import Chats from "./Chats";

const MainContent = () => {
  return (
    <div className="grid grid-cols-[1fr,auto] overflow-hidden bg-soft-white p-3 text-soft-black dark:bg-soft-black dark:text-soft-white sm:gap-3 sm:pr-0">
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
      <Chats />
    </div>
  );
};

export default MainContent;

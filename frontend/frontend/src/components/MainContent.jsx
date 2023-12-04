import React, { useState } from "react";
import { Outlet } from "react-router";
import Chats from "./Chats";

const MainContent = () => {
  return (
    <div className="grid grid-cols-[1fr,auto] overflow-hidden bg-soft-white p-5 text-soft-black dark:bg-soft-black dark:text-soft-white sm:pr-0">
      <div className="overflow-y-auto">
        <Outlet />
      </div>
      <Chats />
    </div>
  );
};

export default MainContent;

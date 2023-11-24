import React, { useState } from "react";
import ChatItem from "./ChatItem";
import { useSelector } from "react-redux";
import { AiOutlineRight } from "react-icons/ai";

const Chats = () => {
  const { userProfile } = useSelector((state) => state.userProfile);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [chatsCollapsed, setChatsCollapsed] = useState(
    localStorage.getItem("chatsCollapse") === "true",
  );
  const collapseButtonRotation = chatsCollapsed ? "rotate-180" : "";
  const chatsWidth = chatsCollapsed ? "w-0" : "w-[22rem]";
  const colapsedGap = chatsCollapsed ? "gap-0" : "gap-5";
  const testImg =
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg";

  const testChats = [
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
    <div
      className={`hidden h-full min-h-0 items-center transition-all duration-300 sm:flex ${colapsedGap}`}
    >
      {/* Collapse button */}
      <button
        onClick={() => {
          localStorage.setItem("chatsCollapse", !chatsCollapsed);
          setChatsCollapsed(!chatsCollapsed);
        }}
        className="rounded-full bg-main-green p-1 hover:bg-main-dark-green"
      >
        <AiOutlineRight
          className={`text-2xl text-soft-white transition-transform duration-300 ${collapseButtonRotation}`}
        />
      </button>

      <div
        className={`h-full overflow-y-auto transition-all duration-300 ${chatsWidth}`}
      >
        {/* Not logged in */}
        {!userProfile && (
          <div className="flex h-full w-full items-center justify-center dark:text-soft-white">
            <p className="text-[20px] font-semibold">Log in to use chats</p>
          </div>
        )}

        {/* Logged in and has chats */}
        {userProfile &&
          testChats.map((item, index) => (
            <ChatItem
              key={index}
              isActive={index === activeChatIndex}
              clickCallback={() => setActiveChatIndex(index)}
              {...item}
            />
          ))}

        {/* Logged in and no chats yet */}
        {testChats.length === 0 && userProfile && (
          <div className="flex h-full w-full items-center justify-center dark:text-soft-white">
            <p className="text-[20px] font-semibold">
              You don't have any chats yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;

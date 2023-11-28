import React from "react";
import { useParams } from "react-router";

const ChatsPage = () => {
  let { id } = useParams();
  const chatInfo = {
    username: "Gurgen Avagyan",
  };
  return (
    <div className="h-full w-full rounded-xl bg-[#E5E5E5] dark:bg-[#595959]">
      <p className="w-full p-2.5 text-center text-2xl font-semibold">
        {chatInfo.username}
      </p>
      <hr className="w-full border-soft-black dark:border-soft-white" />
    </div>
  );
};

export default ChatsPage;

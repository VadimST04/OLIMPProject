import React from "react";

const Useritem = ({ image, username, description }) => {
  return (
    <div className="flex aspect-square w-28 flex-col items-center gap-2">
      <img
        src={image}
        alt=""
        className="h-full w-full rounded-full object-cover"
      />
      <p className="w-full truncate text-center text-[18px] font-semibold">
        {username}
      </p>
      <p className="line-clamp-2 h-12 text-center text-[#515151] dark:text-soft-white">
        {description}
      </p>
      <button className="rounded-md bg-main-green px-5 py-1 text-soft-white hover:bg-main-dark-green">
        Follow
      </button>
    </div>
  );
};

export const UseritemSkeleton = () => {
  return (
    <div className="flex w-28 flex-col items-center gap-2">
      <div className="h-28 w-28 overflow-hidden rounded-full">
        <div
          className={`h-full w-full animate-[pulse_1s_ease-in-out_infinite] bg-soft-black dark:bg-soft-white`}
        ></div>
      </div>
      <div className="flex w-full gap-2">
        <p className="h-1 w-[30%] animate-[pulse_1s_ease-in-out_infinite] truncate rounded-full bg-soft-black text-center text-[18px] font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[50%] animate-[pulse_1s_ease-in-out_infinite] truncate rounded-full bg-soft-black text-center text-[18px] font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[20%] animate-[pulse_1s_ease-in-out_infinite] truncate rounded-full bg-soft-black text-center text-[18px] font-semibold dark:bg-soft-white"></p>
      </div>
      <div className="flex w-full gap-2">
        <p className="h-1 w-[20%] animate-[pulse_1s_ease-in-out_infinite] truncate rounded-full bg-soft-black text-center text-[18px] font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[30%] animate-[pulse_1s_ease-in-out_infinite] truncate rounded-full bg-soft-black text-center text-[18px] font-semibold dark:bg-soft-white"></p>
        <p className="h-1 w-[50%] animate-[pulse_1s_ease-in-out_infinite] truncate rounded-full bg-soft-black text-center text-[18px] font-semibold dark:bg-soft-white"></p>
      </div>
    </div>
  );
};

export default Useritem;

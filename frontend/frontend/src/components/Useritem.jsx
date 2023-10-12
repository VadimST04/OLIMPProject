import React from "react";

const Useritem = ({ img, username, description }) => {
  return (
    <>
      <div className="flex aspect-square w-28 flex-col items-center gap-2">
        <img
          src={img}
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
    </>
  );
};

export default Useritem;

import React from "react";

const BookItem = ({ image, title, author, language }) => {
  return (
    <div className="group w-full cursor-pointer space-y-2 overflow-hidden rounded-2xl border border-[#CACACA] p-2 hover:bg-soft-white-hover dark:border-none dark:bg-[#737373] dark:hover:bg-soft-black-hover">
      <img
        src={image}
        alt=""
        className="h-52 w-full cursor-pointer select-none rounded-2xl object-cover transition-all duration-300 group-hover:scale-110"
      />
      <p className="w-full truncate text-center font-bold">{title}</p>
      <div className="flex w-full items-center justify-center gap-1 truncate text-center text-[14px]">
        <p>{language}</p>
        <p>&#x2022;</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default BookItem;

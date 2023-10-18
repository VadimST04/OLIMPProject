import React from "react";

const BookItem = ({ image, title, author }) => {
  return (
    <div className="h-60 w-44">
      <img
        src={image}
        alt=""
        className="h-full w-full cursor-pointer object-cover transition-all duration-300 hover:scale-110"
      />
      <p className="mt-2 w-full truncate text-center">{title}</p>
      <p className="w-full truncate text-center text-[12px]">{author}</p>
      <button className="mt-1 w-full rounded-md bg-main-green px-5 py-1 text-soft-white hover:bg-main-dark-green">
        Read Now
      </button>
    </div>
  );
};

export default BookItem;

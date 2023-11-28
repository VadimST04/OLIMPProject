import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const DetailedBook = ({ title, author, pages, closeBookHandler }) => {
  pages = 238;
  const [page, setPage] = useState(1);

  const leftClick = () => {
    setPage(page > 1 ? page - 1 : 1);
  };
  const rightClick = () => {
    setPage(page < pages ? page + 1 : pages);
  };

  return (
    <div className="grid h-full w-full grid-rows-[minmax(5rem,auto),1fr,minmax(5rem,auto)] gap-5 overflow-y-auto">
      <div className="relative grid h-full grid-cols-[minmax(0,1fr),auto] gap-5 pt-10">
        <button
          onClick={() => closeBookHandler()}
          className="absolute z-[1] h-min w-min text-[32px]"
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <div className="w-full self-center justify-self-start">
          <p className="w-full break-words text-3xl">{title}</p>
          <p className="w-full break-words text-2xl">{author}</p>
        </div>
        <div className="self-center justify-self-end">
          <p className="text-2xl">
            <span className="font-bold">{page}</span>
            <span>/{pages}</span>
          </p>
        </div>
      </div>
      <div className="overflow-y-auto">
        
      </div>
      <div className="self-center justify-self-center">
        <button
          onClick={leftClick}
          className="rounded-md p-2 text-2xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
        >
          <AiOutlineLeft />
        </button>
        <button
          onClick={rightClick}
          className="rounded-md p-2 text-2xl hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default DetailedBook;

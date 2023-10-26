import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HorizontalCarousel = ({ items, onItemClick }) => {
  const [isLeftVisible, setLeftVisible] = useState(false);
  const [isRightVisible, setRightVisible] = useState(false);
  const [translate, setTranslate] = useState(0);
  const translateAmount = 200;
  const onLeftClick = () => {
    let newTranslate = translateAmount + translate;
    console.log(translate, translateAmount, newTranslate);
    if (newTranslate < 0) newTranslate = 0;
    setTranslate(newTranslate);
  };
  const onRightClick = () => {};

  return (
    <div className="relative flex w-full items-center overflow-x-hidden">
      {isLeftVisible && (
        <div className="absolute left-0 z-[1] flex h-full w-20 items-center bg-gradient-to-r from-soft-white from-50% dark:from-soft-black">
          <div
            onClick={() => onLeftClick()}
            className="cursor-pointer rounded-full p-1 text-[20px] hover:bg-soft-white-hover"
          >
            <FiChevronLeft />
          </div>
        </div>
      )}
      <div
        style={{ transform: `translateX(-${translate}px)` }}
        className={`flex items-center`}
      >
        {items.map((item) => (
          <div
            onClick={() => onItemClick()}
            className="shrink-0 cursor-pointer select-none rounded-md px-3 py-2 font-semibold hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
          >
            {item}
          </div>
        ))}
      </div>
      {isRightVisible && (
        <div className="absolute right-0 flex h-full w-20 items-center justify-end bg-gradient-to-l from-soft-white from-50% dark:from-soft-black">
          <div
            onClick={() => onRightClick()}
            className="cursor-pointer rounded-full p-1 text-[20px] hover:bg-soft-white-hover"
          >
            <FiChevronRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalCarousel;

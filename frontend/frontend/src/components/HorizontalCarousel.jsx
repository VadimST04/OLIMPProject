import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HorizontalCarousel = ({ items, onItemClick }) => {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef();

  const translateAmount = 200;

  const onLeftClick = () => {
    setTranslate((translate) => {
      const newTranslate = translate - translateAmount;
      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  };

  const onRightClick = () => {
    setTranslate((translate) => {
      const newTranslate = translate + translateAmount;
      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;
      if (newTranslate + width >= edge) {
        return edge - width;
      }
      return newTranslate;
    });
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth,
      );
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [items, translate]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center overflow-x-hidden"
    >
      <div
        className="flex w-[max-content] whitespace-nowrap transition-transform"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              // onItemClick();
            }}
            className="shrink-0 cursor-pointer select-none rounded-md px-3 py-2 font-semibold hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
          >
            {item}
          </div>
        ))}
      </div>
      {isLeftVisible && (
        <button className="absolute left-0 z-[1] flex h-full w-20 items-center bg-gradient-to-r from-soft-white from-50% dark:from-soft-black">
          <div
            onClick={() => onLeftClick()}
            className="cursor-pointer rounded-full p-1 text-[20px] hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
          >
            <FiChevronLeft />
          </div>
        </button>
      )}
      {isRightVisible && (
        <button className="absolute right-0 flex h-full w-20 items-center justify-end bg-gradient-to-l from-soft-white from-50% dark:from-soft-black">
          <div
            onClick={() => onRightClick()}
            className="cursor-pointer rounded-full p-1 text-[20px] hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
          >
            <FiChevronRight />
          </div>
        </button>
      )}
    </div>
  );
};

export default HorizontalCarousel;

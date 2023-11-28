import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HorizontalCarousel = ({ items, onItemClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef();

  const translateAmount = 200;
  const activeIndexBg =
    "bg-soft-black text-soft-white dark:bg-soft-white dark:text-soft-black";

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
        className="flex w-[max-content] gap-2 overflow-x-auto whitespace-nowrap transition-transform sm:overflow-x-visible "
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (index === activeIndex) return;
              setActiveIndex(index);
              if (onItemClick) onItemClick(item);
            }}
            className={`shrink-0 cursor-pointer select-none rounded-md border border-soft-white-hover px-2 py-1 font-semibold  sm:border-none ${
              index === activeIndex
                ? activeIndexBg
                : "hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      {isLeftVisible && (
        <button className="absolute left-0 z-[1] flex h-full w-20 items-center bg-gradient-to-r from-soft-white from-50% dark:from-soft-black">
          <div
            onClick={() => onLeftClick()}
            className="hidden cursor-pointer rounded-full p-1 text-[20px] hover:bg-soft-white-hover dark:hover:bg-soft-black-hover sm:block"
          >
            <FiChevronLeft />
          </div>
        </button>
      )}
      {isRightVisible && (
        <button className="absolute right-0 flex h-full w-20 items-center justify-end bg-gradient-to-l from-soft-white from-50% dark:from-soft-black">
          <div
            onClick={() => onRightClick()}
            className="hidden cursor-pointer rounded-full p-1 text-[20px] hover:bg-soft-white-hover dark:hover:bg-soft-black-hover sm:block"
          >
            <FiChevronRight />
          </div>
        </button>
      )}
    </div>
  );
};

export default HorizontalCarousel;

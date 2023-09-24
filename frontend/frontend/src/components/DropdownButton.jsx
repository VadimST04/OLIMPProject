import React, { useEffect, useRef, useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

const DropdownButton = ({ buttons }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const wrapperRef = useRef(null);

  const menuOpacity = isOpen ? " opacity-100" : " opacity-0";
  const menuTranslate = isOpen ? " translate-y-0" : " -translate-y-5";
  const menuVisibility = isOpen ? "visible" : "invisible";
  const buttonCursor = isOpen ? "" : "cursor-default";
  const activeButtonBg = !isOpen
    ? " bg-beig hover:bg-beig-dark"
    : " bg-[#5F8DA3]";

  const buttonClickHandler = (index) => {
    if (!isOpen) return;
    setActiveButtonIndex(index);
    setIsOpen(false);
  };

  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  return (
    <div
      ref={wrapperRef}
      className="text-soft-black relative z-[1] select-none font-euclid text-[18px]"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex cursor-pointer items-center gap-2 rounded-3xl px-6 py-2 ${activeButtonBg}`}
      >
        {buttons.at(activeButtonIndex).icon}
        <p className="hidden sm:block">{buttons.at(activeButtonIndex).title}</p>
        {isOpen ? <AiOutlineClose /> : <MdOutlineExpandMore />}
      </div>
      <div
        className={`bg-beig absolute top-0 z-[-1] flex min-w-full flex-col overflow-hidden rounded-3xl pt-12 transition-all duration-[0.4s] ${menuOpacity} ${menuTranslate} ${menuVisibility}`}
      >
        {buttons
          .filter((_, index) => index !== activeButtonIndex)
          .map((button, index) => (
            <button
              key={index}
              onClick={() => buttonClickHandler(buttons.indexOf(button))}
              className={`bg-beig hover:bg-beig-dark flex w-full items-center justify-center gap-2 px-6 py-3 sm:justify-normal ${buttonCursor}`}
            >
              {button.icon}
              <p className="hidden sm:block">{button.title}</p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default DropdownButton;

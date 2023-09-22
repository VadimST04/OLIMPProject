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
  const activeButtonBg = !isOpen ? " bg-[#211D26] hover:bg-[#2D2834]" : " bg-[#712AE0]";

  const buttonClickHandler = (index) => {
    if (!isOpen) return;
    setActiveButtonIndex(index);
    setIsOpen(false);
  };

  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  return (
    <div ref={wrapperRef} className="text-[#F9F9F9] text-[18px] select-none font-euclid relative z-[1]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-6 py-2 cursor-pointer rounded-3xl ${activeButtonBg}`}>
        {buttons.at(activeButtonIndex).icon}
        <p className="hidden sm:block">{buttons.at(activeButtonIndex).title}</p>
        {isOpen ? <AiOutlineClose /> : <MdOutlineExpandMore />}
      </div>
      <div
        className={`absolute flex flex-col min-w-full bg-[#211D26] top-0 pt-12 rounded-3xl overflow-hidden z-[-1] transition-all duration-[0.4s] ${menuOpacity} ${menuTranslate} ${menuVisibility}`}>
        {buttons.map((button, index) => (
          <button
            onClick={() => buttonClickHandler(index)}
            className={`bg-[#211D26] flex items-center sm:justify-normal justify-center gap-2 px-6 py-3 hover:bg-[#2D2834] w-full ${buttonCursor}`}>
            {button.icon}
            <p className="hidden sm:block">{button.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropdownButton;

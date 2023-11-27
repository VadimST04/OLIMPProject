import React, { useEffect, useRef, useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_IN_FORM_OPEN } from "../store/constants/fromsConstants";

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
  const [activeButtonIndex, setActiveButtonIndex] = useState(
    sessionStorage.getItem("activeButtonIndex")
      ? sessionStorage.getItem("activeButtonIndex")
      : 0,
  );
  const { userToken } = useSelector((state) => state.userToken);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuOpacity = isOpen ? " opacity-100" : " opacity-0";
  const menuTranslate = isOpen ? " translate-y-0" : " -translate-y-5";
  const menuVisibility = isOpen ? "visible" : "invisible";
  const buttonCursor = isOpen ? "" : "cursor-default";
  const activeButtonBg = !isOpen
    ? " bg-beig hover:bg-beig-dark"
    : " bg-beig-dark";

  const buttonClickHandler = (index) => {
    if (
      !userToken &&
      (buttons.at(index).link === "/posts" ||
        buttons.at(index).link === "/users")
    ) {
      dispatch({ type: SIGN_IN_FORM_OPEN });
      return;
    }
    if (!isOpen) return;
    sessionStorage.setItem(
      "activeButtonIndex",
      buttons.indexOf(buttons.at(index)),
    );
    setActiveButtonIndex(index);
    setIsOpen(false);
    navigate(`${buttons.at(index).link}`);
  };

  useOnClickOutside(wrapperRef, () => setIsOpen(false));
  return (
    <div
      ref={wrapperRef}
      className="relative z-[2] hidden min-w-[10rem] select-none font-euclid text-[18px] text-soft-black sm:block"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-[7px] ${activeButtonBg}`}
      >
        {buttons.at(activeButtonIndex).icon}
        <p className="">{buttons.at(activeButtonIndex).title}</p>
        {isOpen ? <AiOutlineClose /> : <MdOutlineExpandMore />}
      </div>
      <div
        className={`absolute top-0 z-[-1] flex min-w-full flex-col overflow-hidden rounded-md bg-beig pt-12 transition-all duration-[0.4s] ${menuOpacity} ${menuTranslate} ${menuVisibility}`}
      >
        {buttons
          .filter((_, index) => index !== activeButtonIndex)
          .map((button, index) => (
            <button
              key={index}
              onClick={() => buttonClickHandler(buttons.indexOf(button))}
              className={`flex w-full items-center justify-center gap-2 bg-beig px-6 py-3 hover:bg-beig-dark md:justify-normal ${buttonCursor}`}
            >
              {button.icon}
              <p className="">{button.title}</p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default DropdownButton;

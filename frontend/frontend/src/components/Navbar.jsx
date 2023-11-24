import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsNewspaper, BsFileEarmarkText } from "react-icons/bs";
import { PiBooksDuotone } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { IoMusicalNotes } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import DropdownButton from "./DropdownButton";
import LanguageDropDown from "./LanguageDropDown";
import ThemeToggle from "./ThemeToggle";
import ProfileButton from "./ProfileButton";
import SettingsButton from "./SettingsButton";
import { useNavigate } from "react-router";
import { RxCross1 } from "react-icons/rx";
import { SIGN_IN_FORM_OPEN } from "../store/constants/fromsConstants";

function Navbar() {
  const { userToken } = useSelector((state) => state.userToken);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonOptions = [
    { title: "News", icon: <BsNewspaper />, link: "/" },
    { title: "Books", icon: <PiBooksDuotone />, link: "/books" },
    { title: "Posts", icon: <BsFileEarmarkText />, link: "/posts" },
    { title: "Users", icon: <FiUsers />, link: "/users" },
    { title: "Music", icon: <IoMusicalNotes />, link: "/music" },
  ];

  const onClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex h-full items-center justify-between bg-main-green px-2 text-soft-white">
        <DropdownButton buttons={buttonOptions} />
        <button
          onClick={() => setSidebarOpen(true)}
          className="group flex h-10 w-10 items-center justify-center rounded-md hover:bg-main-dark-green sm:hidden"
        >
          <BiMenuAltLeft className="text-3xl" />
        </button>

        <div className="pointer-events-none select-none font-bruno-ace text-3xl uppercase text-soft-white">
          olimp
        </div>

        <div className="hidden sm:flex">
          <ThemeToggle />
          <LanguageDropDown />
          {/* <SettingsButton /> */}
          <ProfileButton />
        </div>
        <div className="sm:hidden">
          <ProfileButton />
        </div>
      </div>

      {sidebarOpen && (
        <div
          ref={sidebarRef}
          className={`absolute left-0 top-0 z-[2] flex h-[100dvh] w-[50%] min-w-[15rem] flex-col justify-between bg-soft-black/90 py-2 text-soft-white sm:hidden`}
        >
          <div className="flex flex-col gap-2 px-3">
            <button
              onClick={() => {
                setSidebarOpen(false);
              }}
              className="flex w-full items-center gap-2 rounded-md py-2 hover:bg-black/50"
            >
              <RxCross1 className="text-2xl" />
            </button>
            {buttonOptions.map((item, index) => (
              <button
                onClick={() => {
                  if (
                    !userToken &&
                    (item.link === "/posts" || item.link === "/users")
                  ) {
                    dispatch({ type: SIGN_IN_FORM_OPEN });
                    return;
                  }
                  navigate(item.link);
                  setSidebarOpen(false);
                }}
                key={index}
                className="flex w-full items-center gap-2 rounded-md py-2 hover:bg-black/50"
              >
                {item.title}
                <div className="text-2xl">{item.icon}</div>
              </button>
            ))}
          </div>
          <div className="px-3">
            <LanguageDropDown openUpwards={true} />
            {/* <SettingsButton /> */}
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

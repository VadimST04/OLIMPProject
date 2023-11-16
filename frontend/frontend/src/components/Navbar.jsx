import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

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

function Navbar() {
  const { userToken } = useSelector((state) => state.userToken);
  const navPadding = userToken ? "py-[4px]" : "py-2.5";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();
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
      <div
        className={`hidden items-center justify-between bg-main-green px-5 sm:flex ${navPadding} h-16`}
      >
        <div className="flex w-[168px] items-center gap-5">
          <DropdownButton buttons={buttonOptions} />
        </div>
        <div className="pointer-events-none hidden select-none font-bruno-ace text-4xl uppercase text-soft-white sm:block">
          olimp
        </div>
        <div className="flex items-center">
          <ThemeToggle />
          <LanguageDropDown />
          <SettingsButton />
          <ProfileButton />
        </div>
      </div>
      <div className="relative flex h-16 items-center justify-between bg-main-green px-5 py-2.5 sm:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-4xl text-beig hover:text-beig-dark"
        >
          <BiMenuAltLeft />
        </button>
        <div className="pointer-events-none select-none font-bruno-ace text-3xl uppercase text-soft-white sm:block">
          olimp
        </div>
        <ProfileButton />
        {sidebarOpen && (
          <div
            ref={sidebarRef}
            className={`absolute left-0 top-0 z-[2] flex h-[100dvh] w-[50%] min-w-[15rem] flex-col justify-between bg-soft-black/90 py-2 text-soft-white`}
          >
            <div className="flex flex-col gap-2 px-5">
              {buttonOptions.map((item, index) => (
                <button
                  onClick={() => {
                    navigate(item.link);
                    setSidebarOpen(false);
                  }}
                  key={index}
                  className="flex w-full items-center gap-2 py-2"
                >
                  {item.title}
                  <div className="text-2xl">{item.icon}</div>
                </button>
              ))}
            </div>
            <div className="px-5">
              <div className="flex w-full items-center justify-between gap-2">
                <span>Enabled languages</span>
                <LanguageDropDown />
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <span>Settings</span>
                <SettingsButton />
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <span>Change theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

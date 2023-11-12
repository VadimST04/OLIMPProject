import React from "react";
import { useSelector } from "react-redux";

import { BsNewspaper, BsFileEarmarkText } from "react-icons/bs";
import { PiBooksDuotone } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { IoMusicalNotes } from "react-icons/io5";

import DropdownButton from "./DropdownButton";
import LanguageDropDown from "./LanguageDropDown";
import ThemeToggle from "./ThemeToggle";
import ProfileButton from "./ProfileButton";
import SettingsButton from "./SettingsButton";

function Navbar() {
  const { userToken } = useSelector((state) => state.userToken);
  const navPadding = userToken ? "py-[4px]" : "py-2.5";
  const buttonOptions = [
    { title: "News", icon: <BsNewspaper />, link: "/" },
    { title: "Books", icon: <PiBooksDuotone />, link: "/books" },
    { title: "Posts", icon: <BsFileEarmarkText />, link: "/posts" },
    { title: "Users", icon: <FiUsers />, link: "/users" },
    { title: "Music", icon: <IoMusicalNotes />, link: "/music" },
  ];

  return (
    <div
      className={`flex items-center justify-between bg-main-green px-5 ${navPadding}`}
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
  );
}

export default Navbar;

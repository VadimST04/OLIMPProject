import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "./SearchBar";
import DropdownButton from "./DropdownButton";

import {
  BsNewspaper,
  BsFileEarmarkText,
  BsMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { PiBooksDuotone } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { IoMusicalNotes } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";

function Navbar({ isLoggedIn, profileClick, signInClick, setTheme }) {
  const dispatch = useDispatch();

  const navPadding = isLoggedIn ? "py-[3px]" : "py-2.5";
  const { userToken } = useSelector((state) => state.userToken);
  const buttonOptions = [
    { title: "News", icon: <BsNewspaper />, link: "/" },
    { title: "Books", icon: <PiBooksDuotone />, link: "/books" },
    { title: "Posts", icon: <BsFileEarmarkText />, link: "/posts" },
    { title: "Users", icon: <FiUsers />, link: "/users" },
    { title: "Music", icon: <IoMusicalNotes />, link: "/music" },
  ];

  const testSearchItems = Array.from(
    { length: 999 },
    (_, i) => `Lorem${i + 1}`,
  );

  const testSumbitCallback = (value) => console.log(value);

  return (
    <div
      className={`flex items-center justify-between bg-main-green px-5 ${navPadding}`}
    >
      <div className="flex items-center gap-5">
        <DropdownButton buttons={buttonOptions} />
        <SearchBar
          searchItems={testSearchItems}
          submitCallback={testSumbitCallback}
        />
      </div>
      <div className="flex items-center gap-1">
        <div
          onClick={() => setTheme("dark")}
          className="group cursor-pointer rounded-md p-2 text-[20px] hover:bg-main-dark-green dark:hidden"
        >
          <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
            <BsMoonFill />
          </div>
        </div>
        {/*  */}
        <div
          onClick={() => setTheme("light")}
          className="group hidden cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green dark:block"
        >
          <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
            <BsFillSunFill />
          </div>
        </div>
        {/*  */}
        <div
          onClick={() => {}}
          className="group cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green"
        >
          <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
            <MdLanguage />
          </div>
        </div>
        <div
          onClick={() => {}}
          className="group cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green"
        >
          <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
            <MdSettings />
          </div>
        </div>
        {isLoggedIn && (
          <div
            onClick={() => profileClick()}
            className="group cursor-pointer rounded-full p-2.5 transition-all duration-150 hover:bg-main-dark-green"
          >
            <div className="flex aspect-square w-9 items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-125">
              <img
                src={userToken.image}
                alt=""
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        )}
        {!isLoggedIn && (
          <div
            onClick={() => signInClick()}
            className="group cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green"
          >
            <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
              <HiOutlineUserCircle />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

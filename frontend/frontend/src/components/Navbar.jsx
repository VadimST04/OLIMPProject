import React from "react";
import { useSelector } from "react-redux";

import SearchBar from "./SearchBar";
import DropdownButton from "./DropdownButton";

import { BsNewspaper, BsFillFileEarmarkPostFill } from "react-icons/bs";
import { PiBooksDuotone } from "react-icons/pi";
import { LuUsers2 } from "react-icons/lu";
import { IoMusicalNotes } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";

function Navbar({ isLoggedIn, profileClick, signInClick }) {
  const testImg =
    "https://images.unsplash.com/photo-1695504236952-37306fc71896";
  const buttonOptions = [
    { title: "News", icon: <BsNewspaper />, link: "/" },
    { title: "Books", icon: <PiBooksDuotone />, link: "/books" },
    { title: "Posts", icon: <BsFillFileEarmarkPostFill />, link: "/posts" },
    { title: "Users", icon: <LuUsers2 />, link: "/users" },
    { title: "Music", icon: <IoMusicalNotes />, link: "/music" },
  ];

  const testSearchItems = Array.from(
    { length: 999 },
    (_, i) => `Lorem${i + 1}`,
  );
  const testSumbitCallback = (value) => console.log(value);

  return (
    <div className="flex items-center justify-between bg-main-green px-5 py-1.5">
      <div className="flex items-center gap-5">
        <DropdownButton buttons={buttonOptions} />
        <SearchBar
          searchItems={testSearchItems}
          submitCallback={testSumbitCallback}
        />
      </div>
      <div className="flex items-center gap-1">
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
            className="group cursor-pointer rounded-full p-2 transition-all duration-150 hover:bg-main-dark-green"
          >
            <div className="flex aspect-square w-10 items-center justify-center text-soft-white  group-hover:scale-110">
              <img
                src={testImg}
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

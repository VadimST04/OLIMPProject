import React from "react";
import SearchBar from "./SearchBar";

import { BsNewspaper, BsFillFileEarmarkPostFill } from "react-icons/bs";
import { PiBooksDuotone } from "react-icons/pi";
import { LuUsers2 } from "react-icons/lu";
import { IoMusicalNotes } from "react-icons/io5";

import DropdownButton from "./DropdownButton";

function Navbar({ rightSideButtons }) {
  const buttonOptions = [
    { title: "News", icon: <BsNewspaper /> },
    { title: "Books", icon: <PiBooksDuotone /> },
    { title: "Posts", icon: <BsFillFileEarmarkPostFill /> },
    { title: "Users", icon: <LuUsers2 /> },
    { title: "Music", icon: <IoMusicalNotes /> },
  ];

  return (
    <div className="flex items-center justify-between bg-[#97B1F5] px-5 py-3">
      <div className="flex items-center gap-5">
        <DropdownButton buttons={buttonOptions} />
        <SearchBar />
      </div>
      <div className="flex items-center">
        {rightSideButtons.map((btn, index) => (
          <div
            onClick={() => btn.callback()}
            key={index}
            className="group mx-1 cursor-pointer rounded-md p-2 text-[26px] hover:bg-[#BACBF5]"
          >
            <div className="transition-all duration-150 group-hover:scale-110">
              {btn.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

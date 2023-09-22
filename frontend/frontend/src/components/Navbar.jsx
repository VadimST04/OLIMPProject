import React from "react";
import SearchBar from "./SearchBar";
import { GrLanguage } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsNewspaper, BsFillFileEarmarkPostFill } from "react-icons/bs";
import { PiBooksDuotone } from "react-icons/pi";
import { LuUsers2 } from "react-icons/lu";
import { IoMusicalNotes } from "react-icons/io5";

import DropdownButton from "./DropdownButton";

function Navbar() {
  const buttonOptions = [
    { title: "News", icon: <BsNewspaper /> },
    { title: "Books", icon: <PiBooksDuotone /> },
    { title: "Posts", icon: <BsFillFileEarmarkPostFill /> },
    { title: "Users", icon: <LuUsers2 /> },
    { title: "Music", icon: <IoMusicalNotes /> },
  ];
  const rightSideButtons = [<GrLanguage />, <FiSettings />, <FaRegCircleUser />];
  return (
    <div className="flex items-center justify-between py-3 px-5 bg-[#97B1F5]">
      <div className="flex items-center gap-5">
        <DropdownButton buttons={buttonOptions} />
        <SearchBar />
      </div>
      <div className="flex items-center">
        {rightSideButtons.map((item, index) => (
          <div key={index} className="p-2 hover:bg-[#BACBF5] rounded-md text-[26px] cursor-pointer group mx-1">
            <div className="group-hover:scale-110 transition-all duration-150">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

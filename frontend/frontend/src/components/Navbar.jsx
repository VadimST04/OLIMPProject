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

  const testSearchItems = Array.from(
    { length: 999 },
    (_, i) => `Lorem${i + 1}`,
  );
  const testSumbitCallback = (value) => console.log(value);

  return (
    <div className="flex items-center justify-between bg-main-green px-5 py-3">
      <div className="flex items-center gap-5">
        <DropdownButton buttons={buttonOptions} />
        <div className="">
          <SearchBar
            searchItems={testSearchItems}
            submitCallback={testSumbitCallback}
          />
        </div>
      </div>
      <div className="flex items-center">
        {rightSideButtons.map((btn, index) => (
          <div
            onClick={() => btn.callback()}
            key={index}
            className="group mx-1 cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green"
          >
            <div className="text-soft-white transition-all duration-150 group-hover:scale-110">
              {btn.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

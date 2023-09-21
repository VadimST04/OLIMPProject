import React from "react";
import SearchBar from "./SearchBar";
import { GrLanguage } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import DropDownButton from "./DropDownButton/DropDownButton.tsx";

function Navbar() {
  const buttonTitle = "Menu";
  const buttonOptions = [
    { title: "Option 1", href: "/" },
    { title: "Option 2", href: "/" },
    { title: "Option 3", href: "/" },
    { title: "Option 4", href: "/" },
    { title: "Option 5", href: "/" },
  ];
  const rightSideButtons = [<GrLanguage />, <FiSettings />, <FaRegCircleUser />];
  return (
    <div className="flex items-center justify-between py-3 px-5 bg-[#97B1F5]">
      <div className="flex items-center gap-5">
        {/* <DropdownButton title={buttonTitle} options={buttonOptions} /> */}
        <DropDownButton />

        <SearchBar />
      </div>
      <div className="flex items-center">
        {rightSideButtons.map((item, index) => (
          <div
            key={index}
            className="p-2 hover:bg-[#BACBF5] rounded-md text-[26px] cursor-pointer group mx-1"
          >
            <div className="group-hover:scale-110 transition-all duration-150">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

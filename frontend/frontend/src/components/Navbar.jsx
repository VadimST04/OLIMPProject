import React from "react";
import DropdownButton from "./DropdownButton";

function Navbar() {
  const buttonTitle = "Menu";
  const buttonOptions = [
    { title: "Option 1", href: "/" },
    { title: "Option 2", href: "/" },
    { title: "Option 3", href: "/" },
    { title: "Option 4", href: "/" },
    { title: "Option 5", href: "/" },
  ];
  return (
    <div className="flex items-center justify-between py-3 px-5 bg-[#97B1F5]">
      <div className="flex items-center">
        <DropdownButton title={buttonTitle} options={buttonOptions} />
      </div>
      <div className=""></div>
    </div>
  );
}

export default Navbar;

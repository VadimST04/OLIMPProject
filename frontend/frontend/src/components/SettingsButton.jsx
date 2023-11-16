import React from "react";
import { MdSettings } from "react-icons/md";

const SettingsButton = () => {
  return (
    <button
      onClick={() => {}}
      className="group cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green"
    >
      <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
        <MdSettings />
      </div>
    </button>
  );
};

export default SettingsButton;

import React from "react";
import { MdSettings } from "react-icons/md";

const SettingsButton = () => {
  return (
    <button
      onClick={() => {}}
      className="group relative flex h-10 w-full items-center justify-start gap-2 rounded-md text-soft-white sm:w-10 sm:justify-center sm:hover:bg-main-dark-green"
    >
      <p className="sm:hidden">Settings</p>
      <MdSettings className="text-2xl transition-transform duration-150 group-hover:scale-[115%]" />
    </button>
  );
};

export default SettingsButton;

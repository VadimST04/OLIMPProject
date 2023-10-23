import React, { useEffect, useRef, useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useSelector } from "react-redux";
import Checkbox from "./Checkbox";

const LanguageDropDown = () => {
  const [languageDropDownOpen, setLanguageDropDownOpen] = useState(false);
  const selfRef = useRef();
  const { userProfile } = useSelector((state) => state.userProfile);

  const onOutsideClick = (e) => {
    if (!selfRef.current.contains(e.target)) setLanguageDropDownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", onOutsideClick);
    return () => {
      document.removeEventListener("click", onOutsideClick);
    };
  }, []);

  const languages = [
    "English",
    "Mandarin Chinese",
    "Spanish",
    "Hindi",
    "Arabic",
    "Bengali",
    "Russian",
    "Portuguese",
    "Japanese",
    "German",
    "Korean",
    "French",
    "Telugu",
    "Marathi",
    "Turkish",
    "Tamil",
    "Urdu",
    "Gujarati",
    "Vietnamese",
    "Italian",
    "Ukrainian",
    "Hebrew",
  ];

  return (
    <div
      onClick={() => setLanguageDropDownOpen(true)}
      ref={selfRef}
      className="relative"
    >
      <div className="group cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green">
        <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
          <MdLanguage />
        </div>
      </div>
      <div
        className={`absolute right-0 top-[100%] max-h-48 w-max cursor-pointer overflow-y-auto rounded-md bg-soft-white ${
          !languageDropDownOpen ? "hidden" : ""
        }`}
      >
        {languages.map((item) => (
          <Checkbox label={item} />
        ))}
      </div>
    </div>
  );
};

export default LanguageDropDown;

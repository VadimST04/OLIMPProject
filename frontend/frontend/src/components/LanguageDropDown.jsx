import React, { useEffect, useRef, useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useSelector } from "react-redux";
import Checkbox from "./Checkbox";

const LanguageDropDown = () => {
  const [languageDropDownOpen, setLanguageDropDownOpen] = useState(false);
  const selfRef = useRef();
  const { userProfile } = useSelector((state) => state.userProfile);

  const learning_languages = userProfile?.at(0).learning_langs;
  const dropDownVisibility = languageDropDownOpen ? "" : "hidden";

  const onOutsideClick = (e) => {
    if (!selfRef.current.contains(e.target)) setLanguageDropDownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", onOutsideClick);
    return () => {
      document.removeEventListener("click", onOutsideClick);
    };
  }, []);

  return (
    <div
      onClick={() => setLanguageDropDownOpen(true)}
      ref={selfRef}
      className="relative"
    >
      <div className="group cursor-pointer p-2 text-[26px] hover:bg-main-dark-green">
        <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
          <MdLanguage />
        </div>
      </div>
      <div
        className={`absolute right-0 top-[100%] flex max-h-64 w-max cursor-pointer overflow-y-auto rounded-md bg-soft-white ${dropDownVisibility}`}
      >
        <div className="">
          {learning_languages?.map((lang, index) => (
            <Checkbox key={index} label={lang} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropDown;

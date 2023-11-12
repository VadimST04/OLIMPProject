import React, { useEffect, useRef, useState } from "react";

import { MdLanguage } from "react-icons/md";
import { useSelector } from "react-redux";

import Checkbox from "./Checkbox";

const LanguageDropDown = () => {
  const [languageDropDownOpen, setLanguageDropDownOpen] = useState(false);
  const [learningLanguages, setLearningLanguages] = useState([]);
  const { userProfile } = useSelector((state) => state.userProfile);
  const selfRef = useRef();
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

  useEffect(() => {
    setLearningLanguages(userProfile ? userProfile.learning_langs : []);
  }, [userProfile]);

  const onClickHandler = () => {
    setLanguageDropDownOpen(true);
  };

  return (
    <button onClick={() => onClickHandler()} ref={selfRef} className="relative">
      <div className="group cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green">
        <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
          <MdLanguage />
        </div>
      </div>
      <div
        className={`absolute right-0 top-[100%] flex max-h-64 w-max cursor-pointer overflow-y-auto rounded-md bg-soft-white ${dropDownVisibility}`}
      >
        <div className="">
          {learningLanguages?.map((lang, index) => (
            <Checkbox key={index} label={lang} checkedByDefault={true} />
          ))}
        </div>
      </div>
    </button>
  );
};

export default LanguageDropDown;

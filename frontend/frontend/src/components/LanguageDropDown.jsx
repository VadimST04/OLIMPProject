import React, { useEffect, useRef, useState } from "react";

import { MdLanguage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import Checkbox from "./Checkbox";
import { SIGN_IN_FORM_OPEN } from "../store/constants/fromsConstants";
import { updateSelectedLanguages } from "../store/actions/profileActions";

const LanguageDropDown = ({ openUpwards = false }) => {
  const [languageDropDownOpen, setLanguageDropDownOpen] = useState(false);
  const [learningLanguages, setLearningLanguages] = useState([]);
  const { userProfile } = useSelector((state) => state.userProfile);
  const { userToken } = useSelector((state) => state.userToken);
  const selfRef = useRef();
  const dropDownVisibility = languageDropDownOpen ? "" : "hidden";
  const openStyle = openUpwards ? "bottom-[100%]" : "top-[100%]";
  const dispatch = useDispatch();
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
    const langs = userProfile ? userProfile.learning_langs : [];
    const langsToSet = [];
    for (let i = 0; i < langs.length; i++) {
      langsToSet.push({ languageName: langs[i], enabled: true });
    }
    console.log(langsToSet);
    setLearningLanguages(langsToSet);
  }, [userProfile]);

  const checkCallback = (languageName, enabled) => {
    const newLangs = learningLanguages;
    newLangs.find((lang) => lang.languageName === languageName).enabled =
      enabled;
    setLearningLanguages(newLangs);

    const enabledLanguages = newLangs
      .filter((lang) => lang.enabled)
      .map((lang) => lang.languageName);

    dispatch(updateSelectedLanguages(enabledLanguages));
  };

  useEffect(() => {
    console.log(learningLanguages);
  }, [learningLanguages]);

  return (
    <button
      onClick={() => setLanguageDropDownOpen(true)}
      ref={selfRef}
      className="group relative flex h-10 w-full items-center justify-start gap-2 rounded-md text-soft-white sm:w-10 sm:justify-center sm:hover:bg-main-dark-green"
    >
      <p className="sm:hidden">Languages</p>
      <MdLanguage className="text-[28px] transition-transform duration-150 group-hover:scale-[115%]" />
      <div
        className={`absolute right-0  z-[1] flex max-h-64 w-max cursor-pointer overflow-y-auto rounded-md bg-soft-white ${dropDownVisibility} ${openStyle}`}
      >
        <div className="text-soft-black">
          {learningLanguages?.map((lang, index) => (
            <Checkbox
              key={index}
              label={lang.languageName}
              checkedByDefault={lang.enabled}
              checkCallback={checkCallback}
            />
          ))}
        </div>
      </div>
    </button>
  );
};

export default LanguageDropDown;

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { AiOutlineFileImage } from "react-icons/ai";

const RegistrationSecondStep = ({
  formData,
  setFormData,
  setFirstStep,
  onSubmitClickHandler,
}) => {
  const textSize = "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]";
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

  const langSelected = (value) => {
    const newLearningLanguages = formData.learningLanguages.concat([value]);
    setFormData({
      ...formData,
      learningLanguages: newLearningLanguages,
    });
  };

  const langRemoved = (langToRemove) => {
    const newLearningLanguages = formData.learningLanguages.filter(
      (item) => item !== langToRemove,
    );
    setFormData({
      ...formData,
      learningLanguages: newLearningLanguages,
    });
  };

  return (
    <div className="flex w-full flex-col justify-center gap-4 p-5 pt-0">
      <div className="relative flex items-center">
        <input
          accept="image/*"
          type="file"
          className={`w-full rounded-md bg-soft-white-hover shadow-[0_0_2px_#00000064] outline-none hover:border-main-green dark:bg-soft-black-hover dark:text-soft-white md:py-1.5 md:pl-6 xl:pl-8 ${textSize}`}
          onChange={(e) =>
            setFormData({
              ...formData,
              image: e.target.files[0],
            })
          }
        />
        <div className={`absolute left-1 ${textSize}`}>
          <AiOutlineFileImage />
        </div>
      </div>

      <SearchBar
        searchItems={languages}
        maxHeight="max-h-28"
        placeholder="Choose app language"
        inputStyling={`w-full rounded-md dark:text-soft-white bg-soft-white-hover dark:bg-soft-black-hover py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green md:py-2 ${textSize}`}
        submitCallback={(value) =>
          setFormData({
            ...formData,
            appLanguage: value,
          })
        }
      />
      <SearchBar
        searchItems={languages}
        exceptItems={formData.learningLanguages}
        maxHeight="max-h-40"
        placeholder="Choose learning languages"
        inputStyling={`w-full rounded-md dark:text-soft-white bg-soft-white-hover dark:bg-soft-black-hover py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green md:py-2 ${textSize}`}
        submitCallback={(value) => langSelected(value)}
        clearOnSubmit={true}
      />
      <div
        className={`flex max-h-[8.5rem] flex-wrap items-center gap-1 overflow-y-auto rounded-md bg-soft-white-hover p-2 dark:bg-soft-black-hover dark:text-soft-white`}
      >
        <div className={`w-full select-none text-center ${textSize}`}>
          Click on language to remove:
        </div>
        {formData.learningLanguages.map((item) => (
          <button
            onClick={(e) => {
              e.preventDefault();
              langRemoved(item);
            }}
            key={item}
            className={`cursor-pointer select-none rounded-md bg-soft-black px-3 py-1 text-soft-white ${textSize}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            setFirstStep(true);
          }}
          className={`w-full rounded-md bg-main-green py-1 text-soft-white hover:bg-main-dark-green md:py-2 ${textSize}`}
        >
          Back
        </button>
        <button
          onClick={(e) => onSubmitClickHandler(e)}
          className={`w-full rounded-md bg-main-green py-1 text-soft-white hover:bg-main-dark-green md:py-2 ${textSize}`}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationSecondStep;

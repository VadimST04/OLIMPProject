import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { AiOutlineFileImage } from "react-icons/ai";

const RegistrationSecondStep = ({
  learningLanguages,
  setLearningLanguages,
  setAppLanguage,
  setFirstStep,
  onSubmitClickHandler,
  image,
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
  const [availableLanguages, setAvailableLanguages] = useState(languages);

  const langSelected = (value) => {
    const newLearningLanguages = learningLanguages.concat([value]);
    setLearningLanguages(newLearningLanguages);
    setAvailableLanguages(
      languages.filter((item) => !newLearningLanguages.includes(item)),
    );
  };

  const langRemoved = (langToRemove) => {
    const newLearningLanguages = learningLanguages.filter(
      (item) => item !== langToRemove,
    );
    setLearningLanguages(newLearningLanguages);
    setAvailableLanguages(
      languages.filter((item) => !newLearningLanguages.includes(item)),
    );
  };

  return (
    <div className="flex w-full flex-col justify-center gap-4 p-5 pt-0">
      <div className="relative flex items-center">
        <input
          accept="image/*"
          type="file"
          className={`w-full rounded-md border bg-soft-white pl-5 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green md:py-1.5 md:pl-6 xl:pl-8 ${textSize}`}
          onChange={(e) => image(e.target.files[0])}
        />
        <div className={`absolute left-1 ${textSize}`}>
          <AiOutlineFileImage />
        </div>
      </div>

      <SearchBar
        searchItems={languages}
        maxHeight="max-h-28"
        placeholder="Choose app language"
        submitCallback={(value) => setAppLanguage(value)}
      />
      <SearchBar
        searchItems={availableLanguages}
        maxHeight="max-h-28"
        placeholder="Choose learning languages"
        submitCallback={(value) => langSelected(value)}
        clearOnSubmit={true}
      />
      <div
        className={`max-h-48 flex-wrap items-center gap-1 overflow-y-auto rounded-md bg-white-green p-2 ${
          learningLanguages.length === 0 ? "hidden" : "flex"
        }`}
      >
        <div className={`w-full select-none text-center ${textSize}`}>
          Click on language to remove:
        </div>
        {learningLanguages.map((item) => (
          <div
            onClick={() => langRemoved(item)}
            key={item}
            className={`cursor-pointer select-none rounded-md bg-soft-black px-3 py-1 text-soft-white ${textSize}`}
          >
            {item}
          </div>
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

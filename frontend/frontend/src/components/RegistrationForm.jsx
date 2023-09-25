import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/userActions";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsTranslate } from "react-icons/bs";
import logo from "../assets/OLIMPlogo.png";
import { AiOutlineFileImage } from "react-icons/ai";
import SearchBar from "./SearchBar";

const RegistrationForm = ({ closeFormCallback }) => {
  const formBg = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [appLanguage, setAppLanguage] = useState("");
  const [learningLanguages, setLearningLanguages] = useState([]);

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
  ];

  const [availableLanguages, setAvailableLanguages] = useState(languages);

  const textSize = "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]";
  const fields = [
    {
      title: "Username",
      type: "text",
      placeholder: "Enter your username",
      icon: <FiUser />,
      autoComplete: "username",
      onChangeHandler: (e) => setUsername(e.target.value),
    },
    {
      title: "Password",
      type: "password",
      placeholder: "Enter your password",
      icon: <RiLockPasswordLine />,
      autoComplete: "password",
      onChangeHandler: (e) => setPassword(e.target.value),
    },
    {
      title: "Password confirmation",
      type: "password",
      placeholder: "Confirm your password",
      icon: <RiLockPasswordLine />,
      autoComplete: "password",
      onChangeHandler: (e) => setPasswordConfirmation(e.target.value),
    },
    {
      title: "Profile picture (optional)",
      type: "file",
      placeholder: "",
      icon: <AiOutlineFileImage />,
      autoComplete: "",
      onChangeHandler: (e) => setPasswordConfirmation(e.target.value),
    },
  ];

  const dispatch = useDispatch();
  const onSubmitClickHandler = () => {
    console.log(
      `dispatch[username: ${username}, password: ${password}, passwordConfirmation: ${passwordConfirmation}]`,
    );

    // dispatch(login(username, password));
    closeFormCallback();
  };

  const closeForm = (e) => {
    if (e.target === formBg.current) closeFormCallback();
  };

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
    <div
      ref={formBg}
      onClick={(e) => closeForm(e)}
      className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
    >
      <form className="flex max-h-[75%] w-52 flex-col items-center gap-5 overflow-y-auto rounded-md border bg-soft-white p-5 text-soft-black shadow-[0_0_30px_#00000090] md:w-64 lg:w-96">
        <p className="font-semibold md:text-[18px] lg:text-[22px] xl:text-[24px]">
          Register new Account
        </p>
        <div className="w-full space-y-2">
          {fields.map((item, index) => (
            <div key={index} className="w-full space-y-3">
              <p className={`font-semibold text-gray-400 ${textSize}`}>
                {item.title}
              </p>
              <div className="relative flex items-center">
                <input
                  accept="image/*"
                  onChange={(e) => item.onChangeHandler(e)}
                  autoComplete={item.autoComplete}
                  type={item.type}
                  placeholder={item.placeholder}
                  className={`w-full rounded-md bg-white-green py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none hover:bg-[#D5D9D4] md:py-2 md:pl-6 xl:pl-8 ${textSize}`}
                />
                <div className={`absolute left-1 ${textSize}`}>{item.icon}</div>
              </div>
            </div>
          ))}

          <div className="flex w-full flex-col justify-center gap-3 pt-3">
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
            <div className="flex flex-wrap items-center gap-1">
              <div className={`w-full ${textSize}`}>
                To remove, click on language:
              </div>
              {learningLanguages.map((item) => (
                <div
                  onClick={() => langRemoved(item)}
                  key={item}
                  className={`cursor-pointer rounded-md bg-soft-black px-3 py-1 text-soft-white ${textSize} select-none`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={onSubmitClickHandler}
            className={`w-full rounded-md bg-blue-600 py-1 text-soft-white hover:bg-blue-800 md:py-2 ${textSize}`}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

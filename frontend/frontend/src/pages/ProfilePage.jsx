import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserProfile,
  updateUserProfile,
} from "../store/actions/profileActions";
import { logout } from "../store/actions/userActions";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useRef } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import ImageLoader from "../components/ImageLoader";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageInput = useRef();
  const { userProfile } = useSelector((state) => state.userProfile);
  console.log("userProfile", userProfile);
  // const { languages } = useSelector((state) => state.languagesList);
  // console.log(languages);
  const [imageFileOld, setImageFileOld] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    description: "",
    email: "",
    password: "",
    appLanguage: "",
    learningLanguages: [],
    image: "",
    imageName: imageFile,
  });

  useEffect(() => {
    if (userProfile) {
      setFormData({
        username: userProfile.user.username,
        description: userProfile.description,
        email: userProfile.user.email,
        password: "",
        appLanguage: userProfile.app_lang,
        learningLanguages: [...userProfile.learning_langs],
        image: `data:image/jpeg;base64,${userProfile.image_data}`,
        imageName: imageFile,
      });
    } else {
      dispatch(getUserProfile());
    }
  }, [dispatch, userProfile]);

  const logoutButtonHandler = () => {
    dispatch(logout());
    localStorage.setItem("activeButtonIndex", 0);
    navigate("/");
  };

  const updateButtonHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateUserProfile(
        formData.username,
        formData.email,
        formData.password,
        formData.description,
        formData.imageName === imageFileOld ? null : formData.imageName,
        formData.appLanguage,
        formData.learningLanguages,
      ),
    );

    setImageFileOld(imageFile);
    dispatch(getUserProfile());
  };

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

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(event.target.files[0]),
        imageName: event.target.files[0],
      });
      setImageFile(event.target.files[0]);
    }
  };

  const onFieldsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="h-full w-full overflow-y-auto">
      <form className="flex h-full w-full flex-col gap-10">
        {/* title */}
        <p className="text-center text-[32px] font-semibold">My Profile</p>
        {/* img */}
        <div className="flex items-center justify-center">
          <div
            onClick={() => imageInput.current.click()}
            className="relative aspect-square h-32 rounded-full"
          >
            <div className="h-full w-full cursor-pointer overflow-hidden rounded-full">
              <ImageLoader src={formData.image} displayErrors={false} />
            </div>
            <div className="absolute bottom-2 right-2 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-[#EDC5AB] text-[20px]">
              <BiSolidPencil className="text-soft-black" />
            </div>
            <input
              onChange={onImageChange}
              className="hidden"
              ref={imageInput}
              type="file"
              accept="image/*"
            ></input>
          </div>
        </div>
        {/* Fields */}
        <div className="flex w-full items-center justify-evenly">
          {/* Left */}
          <div className="flex h-56 w-[25%] flex-col justify-between gap-2">
            <div className="w-full">
              <p>Username</p>
              <input
                name="username"
                type="text"
                onChange={onFieldsChange}
                className="w-full rounded-md border-2 border-main-green bg-transparent py-2 pl-3 pr-5 outline-none hover:border-main-green"
                value={formData.username}
              />
            </div>
            <div className="flex min-h-0 w-full flex-grow flex-col">
              <p>Description</p>
              <textarea
                name="description"
                type="text"
                onChange={onFieldsChange}
                className="h-full w-full resize-none rounded-md border-2 border-main-green bg-transparent py-2 pl-3 pr-5 outline-none hover:border-main-green"
                value={formData.description}
              />
            </div>
          </div>

          {/* Middle */}
          <div className="flex h-56 w-[25%] flex-col justify-between gap-2">
            <div className="w-full">
              <p>Email</p>
              <input
                name="email"
                type="text"
                onChange={onFieldsChange}
                className="w-full rounded-md border-2 border-main-green bg-transparent py-2 pl-3 pr-5 outline-none hover:border-main-green"
                value={formData.email}
              />
            </div>
            <div className="w-full">
              <p>Password</p>
              <input
                name="password"
                type="password"
                autoComplete="password"
                onChange={onFieldsChange}
                className="w-full rounded-md border-2 border-main-green bg-transparent py-2 pl-3 pr-5 outline-none hover:border-main-green"
              />
            </div>
            <div className="w-full">
              <p>App language</p>
              <SearchBar
                searchItems={languages}
                maxHeight="max-h-28"
                placeholder="Choose app language"
                submitCallback={(value) => {
                  setFormData({
                    ...formData,
                    appLanguage: value,
                  });
                }}
                defaultValue={formData.appLanguage}
                inputStyling="w-full rounded-md border-2 border-main-green bg-transparent py-2 pl-3 pr-5 outline-none hover:border-main-green"
              />
            </div>
          </div>
          {/* Right */}
          <div className="flex h-56 w-[25%] flex-col justify-between gap-2">
            <div className="w-full">
              <p>Add new language</p>
              <SearchBar
                searchItems={languages}
                exceptItems={formData.learningLanguages}
                maxHeight="max-h-28"
                placeholder="Add new language"
                submitCallback={(value) => langSelected(value)}
                clearOnSubmit={true}
                inputStyling="w-full rounded-md border-2 border-main-green bg-transparent py-2 pl-3 pr-5 outline-none hover:border-main-green"
              />
            </div>
            <div className="flex min-h-0 w-full flex-grow flex-col">
              <p>Languages studied</p>
              <div className="h-full w-full overflow-y-auto rounded-md border-2 border-main-green bg-transparent">
                {formData.learningLanguages.map((item) => (
                  <div
                    key={item}
                    className="flex select-none items-center justify-between px-3 py-1 hover:bg-soft-white-hover dark:hover:bg-soft-black-hover"
                  >
                    <p>{item}</p>
                    <RxCross1
                      onClick={() => langRemoved(item)}
                      className="cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex w-full items-center justify-center gap-10">
          <button
            onClick={logoutButtonHandler}
            className="w-32 rounded-md bg-red-500 py-2 pl-3 pr-5 text-soft-white outline-none hover:bg-red-700"
          >
            Log Out
          </button>
          <button
            onClick={(e) => updateButtonHandler(e)}
            className="w-32 rounded-md bg-main-green py-2 pl-3 pr-5 text-soft-white outline-none hover:border-main-green hover:bg-main-dark-green"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;

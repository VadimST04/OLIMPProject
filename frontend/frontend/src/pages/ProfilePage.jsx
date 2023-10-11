import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../store/actions/profileActions";
import { logout } from "../store/actions/userActions";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useRef } from "react";
const ProfilePage = () => {
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
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { userProfile } = useSelector((state) => state.userProfile);
  console.log(userProfile);

  const logoutButtonHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  // Day input component
  const [date, setDate] = useState();

  // not working add items
  const addListItem = () => {
    setList(false);
  };
  const [list, setList] = useState();
  //----------------------------------

  // avatar component

  const ref = useRef();
  const handleClick = (e) => {
    ref.current.click();
  };

  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  // -----------------
  return (
    <div className="flex flex-col gap-5">
      {/* title */}
      <p className="text-center text-[32px] font-semibold">My Profile</p>
      {/* img */}
      <div className="flex items-center justify-center">
        <div className="relative aspect-square h-52 rounded-full ">
          <img
            src={image}
            alt=""
            className="h-full w-full  rounded-full object-cover"
          />

          <div>
            {" "}
            <button
              className="absolute bottom-5 right-5 z-10 h-5 w-5 rounded-full bg-[#EDC5AB]"
              onClick={handleClick}
            ></button>
            <input
              onChange={onImageChange}
              className="hidden"
              ref={ref}
              type="file"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly py-10">
        {/* left */}
        <div className="flex flex-col gap-8">
          <div className="space-y-3">
            <label />
            First name
            <input
              placeholder="First name"
              className="block w-80 rounded-md border bg-soft-white  p-4 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green"
            />
          </div>

          <div className="space-y-3">
            <label />
            Last name
            <input
              placeholder="Last name"
              className="block w-80 rounded-md  border-[2px] bg-soft-white  p-4 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green "
            />
          </div>

          <div className="space-y-3">
            <label />
            Region
            <input
              placeholder="Region"
              className="block w-80 rounded-md border bg-soft-white  p-4 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green"
            />
          </div>
        </div>
        {/* center */}
        <div className="flex flex-col gap-8">
          <div className="space-y-3">
            <label />
            Password
            <input
              type="password"
              placeholder="Password"
              className="block w-80 rounded-md border bg-soft-white  p-4 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green"
            />
          </div>

          <div className="space-y-3">
            <label />
            Email
            <input
              type="email"
              placeholder="Email"
              className="block w-80 rounded-md  border-[2px] bg-soft-white  p-4 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green "
            />
          </div>

          <div className="space-y-3">
            <label />
            Date of birth
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              placeholder="dd/mm/yy"
              className="block w-80 rounded-md border bg-soft-white  p-4 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex  w-80 flex-col gap-8">
          <div className="space-y-3">
            <label />
            Interface language
            <SearchBar
              submitCallback={() => {}}
              searchItems={languages}
              maxHeight="max-h-28 "
              placeholder="Choose app language"
            />
          </div>
          <div className="space-y-3">
            <label />
            List of languages studied
            <div className="block h-32 w-full  rounded-md border bg-soft-white  p-4 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green">
              <form></form>
            </div>
          </div>
          <div className="flex gap-9">
            <button className=" w-full rounded-md border  bg-[#D9D9D9] px-5 py-3 ">
              Change
            </button>
            <button
              className="w-full bg-[#F4D1BA] px-5 py-3"
              onClick={() => setList(true)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div
        className="
        flex
        flex-row
        items-center 
        gap-9 
        px-[750px]
        py-11 "
      >
        <button className=" w-52 items-center rounded-md  border bg-[#ff2f2f] px-5 py-3 font-semibold text-white">
          Log out
        </button>
        <button className=" w-52 items-center rounded-md  border bg-[#217074] px-5 py-3 font-semibold text-white">
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;

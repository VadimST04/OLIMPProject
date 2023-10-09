import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../store/actions/profileActions";
import { logout } from "../store/actions/userActions";
import { Button } from "primereact/button"; //npm install primereact
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import Avatar from "react-avatar-edit"; //npm i react-avatar-edit
import SearchBar from "../components/SearchBar";
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

  const profilePic =
    "https://images.unsplash.com/photo-1692871480784-4fd78f25459f";

  // Day input component
  const [date, setDate] = useState();
  // Avatar edit components //

  const [imgcrop, setImgcrop] = useState();
  const [profile, setProfile] = useState([]);
  const [preview, setPreview] = useState(false);

  const profE = profile.map((item) => item.preview);
  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const saveCropImage = () => {
    setProfile([...profile, { preview }]);
    setImgcrop(false);
  };
  //------------------------------- //

  // not working add items
  const addListItem = () => {
    setList(false);
  };
  const [list, setList] = useState();
  //----------------------------------
  return (
    <div className="flex flex-col gap-5">
      {/* title */}
      <p className="text-center text-[32px] font-semibold">My Profile</p>
      {/* img */}
      <div className="flex items-center justify-center">
        <div className="relative aspect-square h-52 rounded-full ">
          <img
            src={profE.length ? profE : profilePic}
            alt=""
            className="h-full w-full  rounded-full object-cover"
          />
          <div>
            {" "}
            <button
              className="absolute bottom-5 right-5 z-10 h-5 w-5 rounded-full bg-[#EDC5AB]"
              onClick={() => setImgcrop(true)}
            ></button>
            {/* Dialog component */}
            <Dialog
              visible={imgcrop}
              header={() => (
                <p
                  htmlFor=""
                  className="text-2x1 textColor bg-red-700 font-semibold"
                >
                  Update Avatar
                </p>
              )}
              onHide={() => setImgcrop(false)}
            >
              {/* Avatar in block */}
              <Avatar
                width={500}
                height={400}
                onCrop={onCrop}
                onClose={onClose}
                src={profilePic}
                shadingColor={"#474649"}
                backgroundColor={"#474649"}
              />
              <div className=" flex-column align-items-center mt-5 flex w-12">
                <div className="justify-content-around mt-4 flex w-12">
                  <Button
                    onClick={saveCropImage}
                    label="Save"
                    icon="pi pi-check"
                  />
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
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
            <Dialog
              className="flex h-80 w-80 flex-col border-2 bg-slate-500 hover:border-main-green"
              visible={list}
              header={() => (
                <p htmlFor="" className="text-2x1 textColor font-semibold">
                  Add language
                </p>
              )}
              onHide={() => setList(false)}
            >
              <div className=" align-items-center  flex-col">
                <SearchBar
                  submitCallback={() => {}}
                  searchItems={languages}
                  maxHeight="max-h-28"
                  placeholder="Choose language"
                />
                <Button
                  className="items-center rounded-md bg-[#217074] px-5  py-5 text-white "
                  onClick={addListItem}
                  label="Add"
                />
              </div>
            </Dialog>
          </div>
        </div>
      </div>
      <div
        className="
        flex
        flex-col  items-center "
      >
        <button className=" w-52 items-center rounded-md  border bg-[#217074] px-5 py-3 font-semibold text-white">
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;

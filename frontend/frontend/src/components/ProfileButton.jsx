import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { HiOutlineUserCircle } from "react-icons/hi";
import SignInSignUpForm from "./SignInSignUpForm";
import RegistrationForm from "./RegistrationForm";
import { getUserProfile } from "../store/actions/profileActions";

const ProfileButton = () => {
  const [profileImage, setProfileImage] = useState();
  const [isSignInFormOpen, setSignInFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);
  const { userToken } = useSelector((state) => state.userToken);
  const { userProfile } = useSelector((state) => state.userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userProfile) dispatch(getUserProfile());
    else setProfileImage(userProfile.image);
  }, [dispatch, userProfile]);

  return (
    <>
      {userToken && (
        <div
          onClick={() => navigate("/user/profile")}
          className="group cursor-pointer rounded-full p-2.5 transition-all duration-150 hover:bg-main-dark-green"
        >
          <div className="flex aspect-square w-9 items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-125">
            <img
              src={profileImage}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      )}

      {!userToken && (
        <button
          onClick={() => setSignInFormOpen(true)}
          className="group flex h-10 w-10 items-center justify-center rounded-md text-soft-white hover:bg-main-dark-green"
        >
          <HiOutlineUserCircle className="text-3xl transition-transform duration-150 group-hover:scale-[115%]" />
        </button>
      )}

      {isSignInFormOpen && (
        <SignInSignUpForm
          closeFormCallback={() => setSignInFormOpen(false)}
          registrationFormOpen={() => setRegistrationFormOpen(true)}
        />
      )}

      {isRegistrationFormOpen && (
        <RegistrationForm
          closeFormCallback={() => setRegistrationFormOpen(false)}
        />
      )}
    </>
  );
};

export default ProfileButton;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { HiOutlineUserCircle } from "react-icons/hi";
import SignInSignUpForm from "./SignInSignUpForm";
import RegistrationForm from "./RegistrationForm";

const ProfileButton = () => {
  const [profileImage, setProfileImage] = useState();
  const [isSignInFormOpen, setSignInFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);
  const { userToken } = useSelector((state) => state.userToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) setProfileImage(userToken.image);
  }, [userToken]);

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
        <div
          onClick={() => setSignInFormOpen(true)}
          className="group cursor-pointer rounded-md p-2 text-[26px] hover:bg-main-dark-green"
        >
          <div className="flex items-center justify-center text-soft-white transition-all duration-150 group-hover:scale-110">
            <HiOutlineUserCircle />
          </div>
        </div>
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

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { HiOutlineUserCircle } from "react-icons/hi";
import SignInSignUpForm from "./SignInSignUpForm";
import RegistrationForm from "./RegistrationForm";
import { getUserProfile } from "../store/actions/profileActions";
import { SIGN_IN_FORM_OPEN } from "../store/constants/fromsConstants";

const ProfileButton = () => {
  const [profileImage, setProfileImage] = useState();
  const [isSignInFormOpen, setSignInFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);
  const { userToken } = useSelector((state) => state.userToken);
  const { userProfile } = useSelector((state) => state.userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.formIsOpen);
  useEffect(() => {
    if (!userProfile) dispatch(getUserProfile());
    else setProfileImage(`data:image/jpeg;base64,${userProfile.image_data}`);
  }, [dispatch, userProfile]);

  useEffect(() => {
    setSignInFormOpen(isOpen);
  }, [isOpen]);

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
          onClick={() => {
            dispatch({ type: SIGN_IN_FORM_OPEN });
          }}
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

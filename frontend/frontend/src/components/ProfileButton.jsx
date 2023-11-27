import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { HiOutlineUserCircle } from "react-icons/hi";
import SignInSignUpForm from "./SignInSignUpForm";
import RegistrationForm from "./RegistrationForm";
import { getUserProfile } from "../store/actions/profileActions";
import { SIGN_IN_FORM_OPEN } from "../store/constants/fromsConstants";
import ImageLoader from "./ImageLoader";

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
        <button
          onClick={() => navigate("/user/profile")}
          className="group h-14 w-14 rounded-full p-1.5 hover:bg-main-dark-green"
        >
          <div className="h-full w-full overflow-hidden rounded-full transition-all duration-150 group-hover:scale-[115%]">
            <ImageLoader
              src={
                "https://images.unsplash.com/photo-1700585560129-2c03e2a3f511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
        </button>
      )}

      {!userToken && (
        <button
          onClick={() => {
            dispatch({ type: SIGN_IN_FORM_OPEN });
          }}
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

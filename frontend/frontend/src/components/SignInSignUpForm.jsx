import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/actions/userActions";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import logo from "../assets/OLIMPlogo.png";
import { SIGN_IN_FORM_CLOSE } from "../store/constants/fromsConstants";

const SignInSignUpForm = ({ closeFormCallback, registrationFormOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formBg = useRef(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const error = useSelector((state) => state.usertoken);
  const textSize = "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]";

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const usernameExists = true; // fetch from db
    const isPasswordValid = true; // fetch from db

    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    } else if (!usernameExists) {
      validationErrors.username = "this username doesn't exist";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (!isPasswordValid) {
      validationErrors.password = "wrong password";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(login(formData.username, formData.password));
      dispatch({ type: SIGN_IN_FORM_CLOSE });
      closeFormCallback();
    }
  };

  const closeForm = (e) => {
    if (e.target === formBg.current) {
      dispatch({ type: SIGN_IN_FORM_CLOSE });
    }
  };

  const fieldChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      ref={formBg}
      onClick={(e) => closeForm(e)}
      className="absolute left-0 top-0 z-10 flex h-screen min-h-0 w-screen items-center justify-center bg-black/80"
    >
      <form className="flex w-52 flex-col items-center gap-3 rounded-md bg-soft-white p-5 shadow-[0_0_30px_#00000090] dark:bg-soft-black dark:text-soft-white md:w-64 lg:w-96">
        <div className="pointer-events-none aspect-square w-16 select-none overflow-hidden rounded-md md:w-20 lg:w-24 xl:w-28">
          <img src={logo} alt="" className="h-full w-full object-contain" />
        </div>
        <p className="font-semibold md:text-[18px] lg:text-[22px] xl:text-[24px]">
          Login to your Account
        </p>

        <div className="flex w-full flex-col justify-center gap-4">
          {/* Username */}
          <div className="w-full">
            <div className="relative flex w-full items-center">
              <input
                name="username"
                onChange={fieldChangeHandle}
                autoComplete="username"
                type="text"
                placeholder="Enter your username"
                className={`w-full rounded-md border-2 border-transparent bg-soft-white py-0.5 pl-5 outline-none hover:outline-main-green focus:outline focus:outline-main-green dark:bg-soft-black md:py-2 md:pl-6 xl:pl-8 ${textSize}`}
              />
              <div className={`absolute left-1 ${textSize}`}>
                <FiUser />
              </div>
            </div>
            {errors.username && (
              <div className="text-red-500">{errors.username}</div>
            )}
          </div>

          {/* Password */}
          <div className="w-full">
            <div className="relative flex w-full items-center">
              <input
                name="password"
                onChange={fieldChangeHandle}
                autoComplete="password"
                type="password"
                placeholder="Enter your password"
                className={`w-full rounded-md border-2 border-transparent bg-soft-white py-0.5 pl-5 outline-none hover:outline-main-green focus:outline focus:outline-main-green dark:bg-soft-black md:py-2 md:pl-6 xl:pl-8 ${textSize}`}
              />
              <div className={`absolute left-1 ${textSize}`}>
                <RiLockPasswordLine />
              </div>
            </div>
            {errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className={`w-full rounded-md bg-main-green py-1 text-soft-white hover:bg-main-dark-green md:py-2 ${textSize}`}
        >
          Sign In
        </button>
        <div className="flex w-full items-center gap-3">
          <hr className="w-full border-gray-400" />
          <p
            className={`pointer-events-none select-none text-gray-500 ${textSize}`}
          >
            Or
          </p>
          <hr className="w-full border-gray-400" />
        </div>
        <div
          className={`flex w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-soft-white py-1 text-soft-black hover:bg-gray-300 md:py-2 ${textSize}`}
        >
          <FcGoogle />
          Sign In with Google
        </div>
        <div
          className={`flex w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-[#4E66A4] py-1 text-soft-white hover:bg-[#3B4D7C] md:py-2 ${textSize}`}
        >
          <SiFacebook />
          Sign In with Facebook
        </div>
        <p
          onClick={() => {
            registrationFormOpen();
            closeFormCallback();
          }}
          className="cursor-pointer text-[10px] text-gray-600 hover:underline dark:text-gray-300 md:text-[12px] lg:text-[14px] xl:text-[16px]"
        >
          Don't have an account? Register now
        </p>
      </form>
    </div>
  );
};

export default SignInSignUpForm;

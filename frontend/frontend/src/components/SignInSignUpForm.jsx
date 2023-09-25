import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/userActions";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import logo from "../assets/OLIMPlogo.png";

const SignInSignUpForm = ({ closeFormCallback }) => {
  const textSize = "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]";

  const dispatch = useDispatch();
  const outsideForm = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickHandler = () => {
    console.log("dispatch");
    dispatch(login(username, password));
    closeFormCallback();
  };

  const closeForm = (e) => {
    if (e.target === outsideForm.current) closeFormCallback();
  };

  return (
    <div
      ref={outsideForm}
      onClick={(e) => closeForm(e)}
      className="absolute left-0 top-0 z-10 flex h-screen min-h-0 w-screen items-center justify-center bg-black bg-opacity-50"
    >
      <div className="flex w-52 flex-col items-center gap-3 rounded-md border bg-white p-5 shadow-[0_0_30px_#00000090] md:w-64 lg:w-96">
        <div className="pointer-events-none aspect-square w-16 select-none overflow-hidden rounded-md md:w-20 lg:w-24 xl:w-28">
          <img src={logo} alt="" className="h-full w-full object-contain" />
        </div>
        <p className="font-semibold md:text-[18px] lg:text-[22px] xl:text-[24px]">
          Login to your Account
        </p>
        <div className="w-full space-y-2">
          <div className="w-full space-y-2">
            <p className={`font-semibold text-gray-400 ${textSize}`}>
              Username
            </p>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter your username"
                className={`w-full rounded-md border py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none md:py-2 md:pl-6 xl:pl-8 ${textSize}`}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className={`absolute left-1 ${textSize}`}>
                <FiUser />
              </div>
            </div>
          </div>

          <div className="w-full space-y-2">
            <p className={`font-semibold text-gray-400 ${textSize}`}>
              Password
            </p>
            <div className="relative flex items-center">
              <input
                type="password"
                placeholder="Enter your password"
                className={`w-full rounded-md border py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none md:py-2 md:pl-6 xl:pl-8 ${textSize}`}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={`absolute left-1 ${textSize}`}>
                <RiLockPasswordLine />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onClickHandler}
          className={`w-full rounded-md bg-blue-600 py-1 text-white hover:bg-blue-800 md:py-2 ${textSize}`}
        >
          Sign In
        </button>
        <div className="flex w-full items-center gap-3">
          <hr className="w-full" />
          <p className={`text-gray-400 ${textSize}`}>Or</p>
          <hr className="w-full" />
        </div>
        <div
          className={`flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border py-1 hover:bg-gray-300 md:py-2 ${textSize}`}
        >
          <FcGoogle />
          Sign In with Google
        </div>
        <div
          className={`hover:bg-gray-300-800 flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border bg-[#4E66A4] py-1 text-white hover:bg-[#3B4D7C] md:py-2 ${textSize}`}
        >
          <SiFacebook />
          Sign In with Facebook
        </div>
        <p className="cursor-pointer text-[10px] text-gray-400 hover:underline md:text-[12px] lg:text-[14px] xl:text-[16px]">
          Don't have an account? Register now
        </p>
      </div>
    </div>
  );
};

export default SignInSignUpForm;

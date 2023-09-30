import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/userActions";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import logo from "../assets/OLIMPlogo.png";

const SignInSignUpForm = ({ closeFormCallback, registrationFormOpen }) => {
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
  ];

  const dispatch = useDispatch();
  const formBg = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitClickHandler = () => {
    dispatch(login(username, password));
    closeFormCallback();
  };
  const onRegistrationClick = () => {
    registrationFormOpen();
    closeFormCallback();
  };
  const closeForm = (e) => {
    if (e.target === formBg.current) closeFormCallback();
  };

  return (
    <div
      ref={formBg}
      onClick={(e) => closeForm(e)}
      className="absolute left-0 top-0 z-10 flex h-screen min-h-0 w-screen items-center justify-center bg-black bg-opacity-50"
    >
      <form className="flex w-52 flex-col items-center gap-3 rounded-md border bg-soft-white p-5 text-soft-black shadow-[0_0_30px_#00000090] md:w-64 lg:w-96">
        <div className="pointer-events-none aspect-square w-16 select-none overflow-hidden rounded-md md:w-20 lg:w-24 xl:w-28">
          <img src={logo} alt="" className="h-full w-full object-contain" />
        </div>
        <p className="font-semibold md:text-[18px] lg:text-[22px] xl:text-[24px]">
          Login to your Account
        </p>
        <div className="w-full space-y-2">
          {fields.map((item, index) => (
            <div key={index} className="w-full space-y-2">
              <p className={`font-semibold text-gray-400 ${textSize}`}>
                {item.title}
              </p>
              <div className="relative flex items-center">
                <input
                  onChange={(e) => item.onChangeHandler(e)}
                  autoComplete={item.autoComplete}
                  type={item.type}
                  placeholder={item.placeholder}
                  className={`w-full rounded-md border bg-soft-white py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none
                  hover:border-main-green md:py-2 md:pl-6 xl:pl-8 ${textSize}`}
                />
                <div className={`absolute left-1 ${textSize}`}>{item.icon}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onSubmitClickHandler}
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
          className={`flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border py-1 hover:bg-gray-300 md:py-2 ${textSize}`}
        >
          <FcGoogle />
          Sign In with Google
        </div>
        <div
          className={`flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border bg-[#4E66A4] py-1 text-soft-white hover:bg-[#3B4D7C] md:py-2 ${textSize}`}
        >
          <SiFacebook />
          Sign In with Facebook
        </div>
        <p
          onClick={() => onRegistrationClick()}
          className="cursor-pointer text-[10px] text-gray-500 hover:underline md:text-[12px] lg:text-[14px] xl:text-[16px]"
        >
          Don't have an account? Register now
        </p>
      </form>
    </div>
  );
};

export default SignInSignUpForm;

import React from "react";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
const RegistrationFirstStep = ({
  setUsername,
  setPassword,
  setPasswordConfirmation,
  setFirstStep,
}) => {
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
    {
      title: "Password confirmation",
      type: "password",
      placeholder: "Confirm your password",
      icon: <RiLockPasswordLine />,
      autoComplete: "password",
      onChangeHandler: (e) => setPasswordConfirmation(e.target.value),
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center gap-3">
      {fields.map((item, index) => (
        <div key={index} className="w-full space-y-2">
          <p className={`font-semibold text-gray-400 ${textSize}`}>
            {item.title}
          </p>
          <div className="relative flex items-center">
            <input
              accept="image/*"
              onChange={(e) => item.onChangeHandler(e)}
              autoComplete={item.autoComplete}
              type={item.type}
              placeholder={item.placeholder}
              className={`w-full rounded-md bg-white-green py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none hover:bg-[#D5D9D4] md:py-2 md:pl-6 xl:pl-8 ${textSize}`}
            />
            <div className={`absolute left-1 ${textSize}`}>{item.icon}</div>
          </div>
        </div>
      ))}
      <div
        className={`flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border py-1 hover:bg-gray-300 md:py-2 ${textSize}`}
      >
        <FcGoogle />
        <p>Register with Google</p>
      </div>
      <div
        className={`flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border bg-[#4E66A4] py-1 text-soft-white hover:bg-[#3B4D7C] md:py-2 ${textSize}`}
      >
        <SiFacebook />
        <p>Register with Facebook</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setFirstStep(false);
        }}
        className={`w-full rounded-md bg-blue-600 py-1 text-soft-white hover:bg-blue-800 md:py-2 ${textSize}`}
      >
        Next
      </button>
    </div>
  );
};

export default RegistrationFirstStep;

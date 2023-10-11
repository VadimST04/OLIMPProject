import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

const RegistrationFirstStep = ({ setFirstStep, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const usernameRegex = /^[a-zA-Z0-9_-]+$/;
  const passwordRegex = /^[a-zA-Z0-9]+$/;
  const emailRegex = /\S+@\S+\.\S+/;
  const textSize = "text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]";

  const fieldChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const usernameExists = false; // fetch from db
    const emailExists = false; // fetch from db

    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    } else if (!usernameRegex.test(formData.username)) {
      validationErrors.username =
        "username may only contain letters, numbers and '-','_' symbols";
    } else if (usernameExists) {
      validationErrors.username = "user with such username is already exists";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (!passwordRegex.test(formData.password)) {
      validationErrors.password =
        "password may only contain letters and numbers";
    }

    if (!formData.passwordConfirmation.trim()) {
      validationErrors.passwordConfirmation =
        "password confirmation is required";
    } else if (formData.passwordConfirmation !== formData.password) {
      validationErrors.passwordConfirmation = "passwords must match";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "invalid email";
    } else if (emailExists) {
      validationErrors.email = "user with such email is already exists";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) setFirstStep(false);
  };

  return (
    <div className="flex w-full flex-col justify-center gap-4 p-5 pt-0">
      {/* Username */}
      <div className="w-full">
        <div className="relative flex w-full items-center">
          <input
            name="username"
            autoComplete="username"
            type="text"
            placeholder="Enter username"
            onChange={fieldChangeHandle}
            className={`w-full rounded-md border bg-soft-white py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green md:py-2 md:pl-6 xl:pl-9 ${textSize}`}
          />
          <div className={`absolute left-2 ${textSize}`}>
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
            autoComplete="password"
            type="password"
            placeholder="Enter password"
            onChange={fieldChangeHandle}
            className={`w-full rounded-md border bg-soft-white py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green md:py-2 md:pl-6 xl:pl-9 ${textSize}`}
          />
          <div className={`absolute left-2 ${textSize}`}>
            <RiLockPasswordLine />
          </div>
        </div>
        {errors.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
      </div>

      {/* Password confirmation */}
      <div className="w-full">
        <div className="relative flex w-full items-center">
          <input
            name="passwordConfirmation"
            autoComplete="passwordConfirmation"
            type="password"
            placeholder="Confirm password"
            onChange={fieldChangeHandle}
            className={`w-full rounded-md border bg-soft-white py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green md:py-2 md:pl-6 xl:pl-9 ${textSize}`}
          />
          <div className={`absolute left-2 ${textSize}`}>
            <RiLockPasswordLine />
          </div>
        </div>
        {errors.passwordConfirmation && (
          <div className="text-red-500">{errors.passwordConfirmation}</div>
        )}
      </div>

      {/* Email */}
      <div className="w-full">
        <div className="relative flex w-full items-center">
          <input
            name="email"
            autoComplete="email"
            type="email"
            placeholder="Enter email"
            onChange={fieldChangeHandle}
            className={`w-full rounded-md border bg-soft-white py-1 pl-5 shadow-[0_0_2px_#00000064] outline-none hover:border-main-green md:py-2 md:pl-6 xl:pl-9 ${textSize}`}
          />
          <div className={`absolute left-2 ${textSize}`}>
            <AiOutlineMail />
          </div>
        </div>
        {errors.email && <div className="text-red-500">{errors.email}</div>}
      </div>

      {/* Google and Facebook buttons */}
      <div className="flex w-full items-center gap-3">
        <hr className="w-full border-gray-400" />
        <p
          className={`pointer-events-none select-none text-gray-500 ${textSize}`}
        >
          Or
        </p>
        <hr className="w-full border-gray-400" />
      </div>
      <div className="flex gap-2">
        <div
          className={`shadow- flex flex-grow cursor-pointer items-center justify-center gap-1 rounded-md border-2 py-1 hover:bg-gray-300 md:py-2 ${textSize}`}
        >
          <FcGoogle />
          <p>Use Google</p>
        </div>
        <div
          className={`flex flex-grow cursor-pointer items-center justify-center gap-1 rounded-md border bg-[#4E66A4] py-1 text-soft-white hover:bg-[#3B4D7C] md:py-2 ${textSize}`}
        >
          <SiFacebook />
          <p>Use Facebook</p>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className={`w-full rounded-md bg-main-green py-1 text-soft-white hover:bg-main-dark-green md:py-2 ${textSize}`}
      >
        Next
      </button>
    </div>
  );
};

export default RegistrationFirstStep;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/userActions";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

export default function LoginForm({ call, destroy }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!call) {
    return null;
  }

  const closeWindow = (event) => {
    if (event.target.className === "modal") {
      destroy();
    }
  };

  const onClickHandler = () => {
    console.log("dispatch");
    dispatch(login(username, password));
    destroy();
  };

  return (
    <div className="modal" onClick={closeWindow}>
      <form className="form_container">
        <div className="logo_container" />
        <div className="title_container">
          <p className="title">Login to your Account</p>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="username_field">
            Username
          </label>
          <FiUser className="icon" />
          <input
            placeholder="Enter your username"
            title="Inpit title"
            name="input-name"
            type="text"
            className="input_field"
            id="email_field"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">
            Password
          </label>
          <RiLockPasswordLine className="icon" />
          <input
            placeholder="Password"
            title="Inpit title"
            name="input-name"
            type="password"
            className="input_field"
            id="password_field"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          title="Sign In"
          type="button"
          className="sign-in_btn"
          onClick={onClickHandler}
        >
          <span>Sign In</span>
        </button>
        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>
        <button
          title="Sign In"
          type="submit"
          className="sign-in_ggl"
          onClick={onClickHandler}
        >
          <FcGoogle />
          <span>Sign In with Google</span>
        </button>
        <button
          title="Sign In"
          type="submit"
          className="sign-in_apl"
          onClick={closeWindow}
        >
          <SiFacebook />
          <span>Sign In with Facebook</span>
        </button>
        <p className="note">
          Do not have an account? <a href="#">Register now</a>
        </p>
      </form>
    </div>
  );
}

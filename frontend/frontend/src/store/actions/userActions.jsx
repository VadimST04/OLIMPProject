import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../constants/userConstants";

import axios from "axios";
import { getUserProfile } from "./profileActions";
import { toast } from "react-toastify";

export const login = (username, password) => async (dispatch) => {
  const id = toast.loading("Logging in...", {
    position: "top-center",
    theme: localStorage.getItem("theme"),
  });

  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/login/",
      {
        username,
        password,
      },
      config,
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userToken", JSON.stringify(data));

    toast.update(id, {
      render: "Login successful",
      type: "success",
      isLoading: false,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
    });

    dispatch(getUserProfile());
  } catch (error) {
    toast.update(id, {
      render: "Login failed",
      type: "error",
      isLoading: false,
      autoClose: 5000,
      pauseOnHover: false,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
    });
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("userProfile");

  dispatch({
    type: USER_LOGOUT,
  });
};

export const register =
  (username, email, password, image, app_lang, learning_langs) =>
  async (dispatch) => {
    const id = toast.loading("Creating new account...", {
      position: "top-center",
      theme: localStorage.getItem("theme"),
    });
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const formData = new FormData();
      formData.append("image", image);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("app_lang", app_lang);
      formData.append("learning_langs", JSON.stringify(learning_langs));

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/users/registration/",
        formData,
        config,
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch(login(username, password));
      toast.update(id, {
        render: "Registration successful",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
      });
      localStorage.setItem("userToken", JSON.stringify(data));
    } catch (error) {
      toast.update(id, {
        render: "Registration failed",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        pauseOnHover: false,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.response,
      });
    }
  };

export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/users/",
      config,
    );

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};

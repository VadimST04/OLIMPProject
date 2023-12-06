import { toast } from "react-toastify";
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  CHANGE_SELECTED_LANGUAGES,
} from "../constants/profileConstants";
import axios from "axios";

export const getUserProfile = () => async (dispatch, getState) => {
  try {
    if (localStorage.getItem("userProfile")) {
      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: JSON.parse(localStorage.getItem("userProfile")),
      });
      return;
    }

    dispatch({
      type: USER_PROFILE_REQUEST,
    });

    const { userToken } = getState().userToken;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken.access}`,
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/users/profile/",
      config,
    );

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userProfile", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};

export const updateUserProfile =
  (username, email, password, description, image, app_lang, learning_langs) =>
  async (dispatch, getState) => {
    const id = toast.loading("Saving changes...", {
      position: "top-center",
      theme: localStorage.getItem("theme"),
    });

    try {
      dispatch({
        type: USER_PROFILE_REQUEST,
      });

      const { userToken } = getState().userToken;

      const formData = new FormData();
      if (image) formData.append("image", image);
      formData.append("username", username);
      formData.append("email", email);
      if (password) formData.append("password", password);
      formData.append("description", description);
      formData.append("app_lang", app_lang);
      formData.append("learning_langs", JSON.stringify(learning_langs));

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userToken.access}`,
        },
      };

      const { data } = await axios.patch(
        "http://127.0.0.1:8000/api/users/profile/update/",
        formData,
        config,
      );

      console.log(data);

      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: data,
      });

      toast.update(id, {
        render: "Changes saved",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
      });

      localStorage.setItem("userProfile", JSON.stringify(data));
    } catch (error) {
      toast.update(id, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        pauseOnHover: false,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.response,
      });
    }
  };

export const updateSelectedLanguages =
  (languages) => async (dispatch, getState) => {
    try {
      const { userToken } = getState().userToken;

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userToken.access}`,
        },
      };

      const { data } = await axios.patch(
        "http://127.0.0.1:8000/api/users/profile/update/",
        { selected_learning_langs: languages },
        config,
      );

      console.log(data);

      dispatch({
        type: CHANGE_SELECTED_LANGUAGES,
        payload: data,
      });

      localStorage.setItem("userProfile", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.response,
      });
    }
  };

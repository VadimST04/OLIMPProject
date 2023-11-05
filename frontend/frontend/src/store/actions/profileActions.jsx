import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
} from "../constants/profileConstants";
import axios from "axios";

export const getUserProfile = () => async (dispatch, getState) => {
  try {
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
      "http://127.0.0.1:8000/api/users/profile",
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
  (username, email, password, image, app_lang, learning_langs) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_PROFILE_REQUEST,
      });

      const { userToken } = getState().userToken;

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
          Authorization: `Bearer ${userToken.access}`,
        },
      };

      const { data } = await axios.patch(
        "http://127.0.0.1:8000/api/users/profile/update/",
        formData,
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

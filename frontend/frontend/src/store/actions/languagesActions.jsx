import {
  LANGUAGES_REQUEST,
  LANGUAGES_SUCCESS,
  LANGUAGES_FAIL,
} from "../constants/languagesConstants";

export const languagesList = () => async (dispatch) => {
  try {
    dispatch({
      type: LANGUAGES_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(
      "http://127.0.0.1:8000/api/languages/",
      config,
    );

    dispatch({
      type: LANGUAGES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LANGUAGES_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.response,
    });
  }
};

import { MAIN_BUTTON_CHANGE_NAME } from "../constants/buttonsConstants";

const changeMainButtonName = (icon, name) => (dispatch) => {
  dispatch({
    type: MAIN_BUTTON_CHANGE_NAME,
    payload: {
      icon: icon,
      btnName: name,
    },
  });
};

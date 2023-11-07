import { BsNewspaper } from "react-icons/bs";

import { MAIN_BUTTON_CHANGE_NAME } from "../constants/buttonsConstants";

export const mainButtonReducer = (
  state = { buttonName: `${(<BsNewspaper />)} News` },
  action,
) => {
  switch (action.type) {
    case MAIN_BUTTON_CHANGE_NAME:
      return { buttonName: `${action.payload.icon} ${action.payload.btnName}` };

    default:
      return state;
  }
};

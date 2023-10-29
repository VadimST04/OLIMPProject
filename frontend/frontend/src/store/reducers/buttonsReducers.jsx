import { BsNewspaper } from "react-icons/bs";

import { MAIN_BUTTON_CHANGE_NAME } from "../constants/buttonsConstants";

export const mainButtonReducer = (
  state = { buttonName: `${(<BsNewspaper />)} News` },
  action,
) => {
  switch (action.type) {
    case MUSIC_REQUEST:
      return { buttonName: `${action.payload.icon} ${action.payload.btnName}` };

    default:
      return state;
  }
};

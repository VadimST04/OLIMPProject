import {
  SIGN_IN_FORM_OPEN,
  SIGN_IN_FORM_CLOSE,
} from "../constants/fromsConstants";

export const signInFormToggler = (state = { isOpen: false }) => {
  switch (action.type) {
    case SIGN_IN_FORM_OPEN:
      return { isOpen: true };

    case SIGN_IN_FORM_CLOSE:
      return { isOpen: false };

    default:
      return state;
  }
};

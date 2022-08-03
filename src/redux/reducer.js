import * as actionType from "./actionTypes";
const init = { darkMode: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case actionType.SET_THEME:
      return {
        ...state,
        darkMode: payload,
      };

    default:
      return state;
  }
};

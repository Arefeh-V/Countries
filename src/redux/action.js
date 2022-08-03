import * as actionType from "./actionTypes";

export const SetThemeAction = (payload) => {
  return {
    type: actionType.SET_THEME,
    payload,
  };
};

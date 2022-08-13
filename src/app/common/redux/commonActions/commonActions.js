import { commonTypes } from "../commonTypes/commonTypes";

export const setToastMessage = ({ type, message }) => {
  debugger;
  return {
    type: commonTypes.TOAST_MESSAGE,
    payload: {
      data: {
        type,
        message,
      },
    },
  };
};

export const setAppLoader = (status) => {
  return {
    type: commonTypes.APP_LOADED,
    payload: {
      data: {
        status,
      },
    },
  };
};

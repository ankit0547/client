import { commonTypes } from "../commonTypes/commonTypes";

const initialState = {
  loaded: false,
  theme: "light",
  toastMsg: {},
};

const ApplicationState = (state = initialState, action = null) => {
  const { payload } = action;
  switch (action.type) {
    case commonTypes.APP_LOADED:
      return {
        ...state,
        loaded: payload.data.status,
      };
    case commonTypes.TOAST_MESSAGE:
      return {
        ...state,
        toastMsg: payload.data,
      };
    default:
      return state;
  }
};

export default ApplicationState;

import { clientTypes } from "./clientTypes";

export const getUsersDetails = () => {
  return {
    type: clientTypes.GET_USERS,
  };
};

export const setUsersDetails = (users) => {
  return {
    type: clientTypes.SET_USERS,
    payload: {
      data: {
        users,
      },
    },
  };
};

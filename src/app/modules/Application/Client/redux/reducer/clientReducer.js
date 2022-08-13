import { clientTypes } from "../actions/clientTypes";

const initialState = {
  clientUsername: "",
  users: [],
};

const ClientState = (state = initialState, action = null) => {
  const { payload } = action;
  switch (action.type) {
    case clientTypes.SET_USERS:
      return {
        ...state,
        users: payload.data.users,
      };
    default:
      return state;
  }
};

export default ClientState;

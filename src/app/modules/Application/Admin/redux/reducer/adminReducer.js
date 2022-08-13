import { adminTypes } from "../actions/adminTypes";

const initialState = {
  adminUsername: "",
};

const AdminState = (state = initialState, action = null) => {
  switch (action.type) {
    case adminTypes.CLIENT_APP_LOADED:
      return {
        ...state,
        adminUsername: action.data,
      };

    default:
      return state;
  }
};

export default AdminState;

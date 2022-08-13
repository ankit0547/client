import { adminTypes } from "./adminTypes";

const initialState = {
  isAdminLoggedIn: false,
};

const AdminState = (state = initialState, action = null) => {
  switch (action.type) {
    case adminTypes.ADMIN_LOGIN:
      return {
        ...state,
        isAdminLoggedIn: action.data,
      };

    default:
      return state;
  }
};

export default AdminState;

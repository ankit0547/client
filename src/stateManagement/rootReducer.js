import { ClientState } from "../app/modules/Client/redux";
import { AdminState } from "../app/modules/Admin/redux";
import ApplicationState from "../app/common/redux/reducers/ApplicationReducer";
import { combineReducers } from "redux";

const AppRootReducer = combineReducers({
  ApplicationState,
  AdminState,
  ClientState,
});

export default AppRootReducer;

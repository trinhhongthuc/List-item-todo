import { combineReducers } from "redux";

import FetchDataUser from "./FetchDataUser";

const RootReducer = combineReducers({
  FetchDataUser: FetchDataUser,
});

export default RootReducer;

// import orderReducer from './order';
import authFbReducer from './authFb';
import settingReducer from "./setting";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  // orders: orderReducer,
  authFb: authFbReducer,
  setting: settingReducer,
});

export default allReducers;
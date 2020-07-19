// import orderReducer from './order';
import authFbReducer from './authFb';
import settingReducer from "./setting";
import controlReducer from "./control";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  // orders: orderReducer,
  authFb: authFbReducer,
  setting: settingReducer,
  control: controlReducer
});

export default allReducers;
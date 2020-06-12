// import orderReducer from './order';
import authFbReducer from './authFb';

import { combineReducers } from "redux";

const allReducers = combineReducers({
  // orders: orderReducer,
  authFb: authFbReducer
});

export default allReducers;
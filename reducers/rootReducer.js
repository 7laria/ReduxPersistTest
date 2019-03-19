import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import pippoReducer from './pippoReducer'
const rootReducer = combineReducers({
  pippo: pippoReducer,
  login: loginReducer
});

export default rootReducer;

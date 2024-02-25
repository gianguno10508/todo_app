import { combineReducers } from "redux";
import DarkMode from "./darkmode";

const rootReducer = combineReducers({
  darkmode: DarkMode,
});

export default rootReducer;

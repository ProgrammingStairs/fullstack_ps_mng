import { createStore } from "redux";
import addReducers from "./reducers/index.js";
export default createStore(addReducers);
import { combineReducers } from "redux";
import counter from "./counterReducer.js";
import head from "./headReducer.js";

const addReducers = combineReducers({
    counter,
    head
});

export default addReducers;
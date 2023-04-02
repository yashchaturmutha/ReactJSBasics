import changeTheNumber from "./updown";

//combine multiple reducers
import { combineReducers } from "redux";

//root reducer which has all reducers
const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber
    }
);

export default reducers;
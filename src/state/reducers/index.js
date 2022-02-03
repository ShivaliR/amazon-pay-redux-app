//if there are more than one reducer; combine all those reducers and the export it
import { combineReducers } from "redux";
import amountReducer from "./amount-Reducer";

const reducers = combineReducers({
    amount: amountReducer
})

export default reducers;
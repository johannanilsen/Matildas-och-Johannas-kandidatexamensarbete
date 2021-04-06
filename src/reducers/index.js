import idReducer from "./id";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    idReducer: idReducer    
});
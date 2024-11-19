import { combineReducers, createStore } from "redux";
import dataReducer from "./reducers/dataReducer";

const combinedReducer = combineReducers({ dataReducer: dataReducer });

const store = createStore(combinedReducer);

export default store;

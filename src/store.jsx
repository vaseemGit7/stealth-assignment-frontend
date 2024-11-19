import { combineReducers, createStore } from "redux";
import dataReducer from "./reducers/dataReducer";
import paramsReducer from "./reducers/paramsReducer";

const combinedReducer = combineReducers({
  dataReducer: dataReducer,
  paramsReducer: paramsReducer,
});

const store = createStore(combinedReducer);

export default store;

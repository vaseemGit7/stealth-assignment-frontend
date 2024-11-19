import { SET_PARAM } from "../reducers/paramsReducer";

export const setParam = (key, value) => ({
  type: SET_PARAM,
  payload: { key, value },
});

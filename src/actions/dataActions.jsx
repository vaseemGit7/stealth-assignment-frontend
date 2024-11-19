import { SET_RESULT_DATA } from "../reducers/dataReducer";

const setResultData = (data) => ({
  type: SET_RESULT_DATA,
  payload: data,
});

export default setResultData;

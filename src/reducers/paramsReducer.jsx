export const SET_PARAM = "SET_PARAM";

const initialState = {
  sortBy: "stock",
};

const paramsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_PARAM:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};

export default paramsReducer;

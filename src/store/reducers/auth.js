import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, error: null, loading: true };
      break;
    case actionTypes.AUTH_SUCCESS:
      console.log("inn", action);
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        loading: false,
        error: false,
      };
      break;
    case actionTypes.AUTH_FAIL:
      return { ...state, error: action.error };
    case actionTypes.AUTH_LOGOUT:
      return { ...state, token: null, userId: null };
    default:
      return state;
  }
};

export default reducer;

import { FETCH_DATA, UPDATE_MOVIES, SET_ERROR } from "../actions/Actions";

const initialState = {
  missions: [],
  isFetchingData: false,
  error: ""
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        movies: []
      };
    case UPDATE_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};

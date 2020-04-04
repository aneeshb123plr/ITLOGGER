import {
  SET_LOADING,
  ADD_LOG,
  DELETE_LOG,
  LOG_ERROR,
  GET_LOGS,
  SEARCH_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        loading: false
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };
    case SEARCH_LOG:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };

    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        ),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOG_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: true
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};

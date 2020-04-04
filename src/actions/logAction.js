import {
  GET_LOGS,
  ADD_LOG,
  SET_LOADING,
  DELETE_LOG,
  LOG_ERROR,
  SEARCH_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT
} from "./types";

// Get all logs
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    console.error(err.response.data);
    dispatch({
      type: LOG_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set loading

export const setLoading = () => dispatch => {
  dispatch({
    type: SET_LOADING
  });
};

// Add log

export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log("Aneesh" + data);
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    console.error(err.response.data);
    dispatch({
      type: LOG_ERROR,
      payload: err.response.statusText
    });
  }
};

// delete log

export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    console.error(err.response.data);
    dispatch({
      type: LOG_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search log

export const searchLog = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current log

export const setCurrent = log => dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: log
  });
};

// clear current

export const clearCurrent = () => dispatch => {
  dispatch({
    type: CLEAR_CURRENT
  });
};

// Update log

export const updateLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });

    clearCurrent();
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: err.response.statusText
    });
  }
};

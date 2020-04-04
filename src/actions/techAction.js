import {
  GET_TECHS,
  ADD_TECH,
  TECH_ERROR,
  DELETE_TECH,
  SET_LOADING
} from "./types";

// GET TECH

export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    console.log(err.response.statusText);
    dispatch({
      type: TECH_ERROR,
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

// Add tech

export const addTech = tech => async dispatch => {
  setLoading();
  try {
    const res = await fetch("/techs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tech)
    });

    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText
    });
  }
};

//Delete tech

export const deleteTech = id => async dispatch => {
  setLoading();
  try {
    await fetch(`/techs/${id}`, {
      method: "DELETE"
    });
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText
    });
  }
};

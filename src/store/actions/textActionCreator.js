import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const changeText = value => {
  return { type: actionTypes.CHANGE_TEXT, value: value };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};


export const fetchIngredientsFails = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILS,
  };
};

export const initIngredients = () => {
  return dispatch => {

    // dispatch(someActionCreator Syncronous to set loading or somethiung to true);

    Axios.get("https://www.reddit.com/r/reactjs.json")
      .then(res => {
        dispatch(setIngredients(res.data)); // set the data to global state and loading or something to false;
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchIngredientsFails());
      });
  };
};

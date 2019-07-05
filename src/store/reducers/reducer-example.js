import * as actionTypes from "../actions/actionTypes";

const initialState = {
  text_value: "default text redux",
  array_value: [],
  error: false,
  ingredients: [],
};

const reducerExample = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TEXT:
        return {
            ...state,
            text_value: action.value
        }
        case actionTypes.FETCH_INGREDIENTS_FAILS:
        return {
            ...state,
            error: true
        }
        case actionTypes.SET_INGREDIENTS:
        return {
            ...state,
            ingredients: action.ingredients,
            error: false
        }
    default:
      return state;
  }
};

export default reducerExample;

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      const newUsers = state.users.concat(action.user);
      return {
        ...state,
        users: newUsers
      };
    default:
      return state;
  }
};

export default usersReducer;

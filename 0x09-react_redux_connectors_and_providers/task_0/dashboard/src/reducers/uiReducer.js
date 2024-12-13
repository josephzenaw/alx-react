// dashboard/src/reducers/uiReducer.js

const initialState = {
  isLoggedIn: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default uiReducer;


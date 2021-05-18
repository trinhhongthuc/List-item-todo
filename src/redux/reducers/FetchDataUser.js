import types from "../type";
const initialState = [];

const FetchDataUser = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      const newState = [...state, ...action.payload];
      return newState;
    default:
      return state;
  }
};

export default FetchDataUser;

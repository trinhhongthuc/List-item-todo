import types from "./type";

export const getData = (payload) => {
  return {
    type: types.FETCH_DATA,
    payload: payload,
  };
};

export const getDataSaga = () => {
  return {
    type: types.FETCH_DATA_SAGA,
  };
};

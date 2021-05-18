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

export const addSaga = (payload) => {
  return {
    type: types.ADD_DATA_SAGA,
    payload: payload,
  };
};

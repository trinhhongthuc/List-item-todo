import { call, put, takeEvery } from "redux-saga/effects";

import types from "../type";

const addData = (data) => {
  return {
    type: types.ADD_DATA,
    payload: data,
  };
};

function* watchAddSaga(data) {
  try {
    const rs = yield call(() => addData(data.payload));
    yield put(rs);
  } catch (error) {
    console.log(error);
  }
}

function* AddDataSaga() {
  yield takeEvery(types.ADD_DATA_SAGA, watchAddSaga);
}

export default AddDataSaga;

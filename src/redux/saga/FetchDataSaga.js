import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import types from "../type";
import { getData } from "../actions";

const fetchDataAxios = (url) => {
  const res = axios.get(url);
  try {
    return res;
  } catch (error) {
    console.log(error);
  }
};

function* watchFetchDataSaga() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const data = yield call(() => fetchDataAxios(url));
    yield put(getData(data.data));
  } catch (error) {
    console.log(error);
  }
}

function* FetchDataSaga() {
  yield takeEvery(types.FETCH_DATA_SAGA, watchFetchDataSaga);
}

export default FetchDataSaga;

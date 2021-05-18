import { all } from "redux-saga/effects";

import FetchDataSaga from "./FetchDataSaga";
function* RootSaga() {
  yield all([FetchDataSaga()]);
}

export default RootSaga;

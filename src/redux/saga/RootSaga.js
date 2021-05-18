import { all } from "redux-saga/effects";

import FetchDataSaga from "./FetchDataSaga";
import AddDataSaga from "./AddDataSaga";
function* RootSaga() {
  yield all([FetchDataSaga(), AddDataSaga()]);
}

export default RootSaga;

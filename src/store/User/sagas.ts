import { all, fork, put, call, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../utils/callApi';
import { getUserE, getUserS } from './actions';
import { ActionTypes } from './types';

function* handleGetUser() {
	try {
		const data = yield call(callApi);
		console.log('data: ', data);
		yield put(getUserS({ id: 1 }));
	} catch (e) {
		yield put(getUserE(e));
	}
}

function* watchFetchRequest() {
	yield takeEvery(ActionTypes.GET_USER_R, handleGetUser);
}

export default function* userSaga() {
	yield all([fork(watchFetchRequest)]);
}

import * as selectors from './selectors';
import {
	put,
	call,
	takeLatest,
	select,
	all
} from 'redux-saga/effects';
import { UPDATE_FILTERS, LOAD_INITIAL_POSTS, updatePosts } from "./actions";
import { createEndpoint, getPosts } from "../helpers";

function* getInitialData() {
	try {
		const baseUrl = yield select(selectors.baseUrl);
		const data = yield call(getPosts, baseUrl);
		yield put(updatePosts(data));
	} catch (e) {
		console.log(e);
	}
}

function* getFilteredData() {
	try {
		const baseUrl = yield select(selectors.baseUrl);
		const filters = yield select(selectors.filters);
		const data = yield call(getPosts, createEndpoint(baseUrl, filters));
		yield put(updatePosts(data));
	} catch (e) {
		console.log(e);
	}
}

function* rootSaga() {
	yield all([
		takeLatest(LOAD_INITIAL_POSTS, getInitialData),
		takeLatest(UPDATE_FILTERS, getFilteredData)
	]);
}

export default rootSaga;

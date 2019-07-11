import * as selectors from './selectors';
import {
	put,
	call,
	takeLatest,
	select,
	all
} from 'redux-saga/effects';
import {
	UPDATE_FILTERS,
	SET_INITIAL_POSTS,
	CHANGE_PAGE
} from "./actionTypes";
import {
	updatePosts,
	updateLoading,
	setInitialPostData,
	setPostData
} from "./actions";
import {
	createEndpoint,
	getPosts
} from "../helpers";

function* getInitialData() {
	try {
		const baseUrl = yield select(selectors.baseUrl);
		yield put(updateLoading(true));
		const data = yield call(getPosts, baseUrl);
		data.currentQuery = baseUrl;
		yield put(updatePosts(data.items));
		yield put(setInitialPostData(data));
		yield put(updateLoading(false));
	} catch (e) {
		console.log(e);
	}
}

function* getFilteredData() {
	try {
		const baseUrl = yield select(selectors.baseUrl);
		const filters = yield select(selectors.filters);
		const endpoint = createEndpoint(baseUrl, filters);
		yield put(updateLoading(true));
		const data = yield call(getPosts, endpoint);
		data.currentQuery = endpoint;
		yield put(updatePosts(data.items));
		yield put(setPostData(data));
		yield put(updateLoading(false));
	} catch (e) {
		console.log(e);
	}
}

function* changePage() {
	try {
		const currentPage = yield select(selectors.currentPage);
		const currentQuery = yield select(selectors.currentQuery);
		yield put(updateLoading(true));
		const data = yield call(getPosts, `${currentQuery}page=${currentPage}`);
		yield put(updatePosts(data.items));
		yield put(updateLoading(false));
	} catch(e) {
		console.log(e);
	}
}

function* rootSaga() {
	yield all([
		takeLatest(SET_INITIAL_POSTS, getInitialData),
		takeLatest(UPDATE_FILTERS, getFilteredData),
		takeLatest(CHANGE_PAGE, changePage)
	]);
}

export default rootSaga;

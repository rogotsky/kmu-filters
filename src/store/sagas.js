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
  CHANGE_PAGE,
  SEARCH_POSTS
} from "./actionTypes";
import {
  updatePosts,
  updateLoading,
  setPostData
} from "./actions";
import {
  createEndpoint,
  getPosts
} from "../helpers";
import {
  BASE_URL,
  SEARCH_URL
} from "../constants";

function* getInitialData() {
  try {
    yield put(updateLoading(true));
    const data = yield call(getPosts, BASE_URL);
    yield put(updatePosts(data.items));
    yield put(setPostData(data));
    yield put(updateLoading(false));
  } catch (e) {
    console.log(e);
  }
}

function* getFilteredData() {
  try {
    const filters = yield select(selectors.filters);
    const endpoint = createEndpoint(BASE_URL, filters);
    yield put(updateLoading(true));
    const data = yield call(getPosts, endpoint);
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
  } catch (e) {
    console.log(e);
  }
}

function* search() {
  try {
    const searchValue = yield select(selectors.searchValue);
    const endpoint = SEARCH_URL + searchValue + '&';
    yield put(updateLoading(true));
    const data = yield call(getPosts, endpoint);
    yield put(updatePosts(data.items));
    yield put(setPostData(data));
    yield put(updateLoading(false));
  } catch (e) {
    console.log(e);
  }
}

function* rootSaga() {
  yield all([
    takeLatest(SET_INITIAL_POSTS, getInitialData),
    takeLatest(UPDATE_FILTERS, getFilteredData),
    takeLatest(CHANGE_PAGE, changePage),
    takeLatest(SEARCH_POSTS, search)
  ]);
}

export default rootSaga;

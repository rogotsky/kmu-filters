import {
	UPDATE_FILTERS,
	UPDATE_POSTS,
	SET_INITIAL_POSTS,
	UPDATE_LOADING,
	SET_INITIAL_POST_DATA,
	SET_POST_DATA,
	CHANGE_PAGE
} from "./actionTypes";

/**
 * TODO:
 * Add NODE_ENV for development and production
 * (?) combine reducers
 */
const initialState = {
	filters: {},
	baseUrl: 'http://localhost/wp-json/wp/v2/document?',
	loading: false,
	totalInitialPosts: 0,
	totalPages: 0,
	currentQuery: '',
	currentPage: 1,
	posts: {}
};

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_FILTERS:
			return { ...state, filters: action.payload };

		case UPDATE_POSTS:
			return { ...state, posts: action.payload };

		case SET_INITIAL_POSTS:
			return { ...state };

		case SET_INITIAL_POST_DATA:
			return {
				...state,
				totalInitialPosts: action.payload.totalPosts,
				totalPages: action.payload.totalPages,
				currentQuery: action.payload.currentQuery,
				currentPage: 1
			};

		case SET_POST_DATA:
			return {
				...state,
				totalPages: action.payload.totalPages,
				currentQuery: action.payload.currentQuery,
				currentPage: 1
			};

		case UPDATE_LOADING:
			return { ...state, loading: action.payload };

		case CHANGE_PAGE:
			return { ...state, currentPage: action.payload };

		default:
			return state;
	}
};

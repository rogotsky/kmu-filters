import {
	UPDATE_FILTERS,
	UPDATE_POSTS,
	SET_INITIAL_POSTS,
	UPDATE_LOADING,
	SET_POST_DATA,
	CHANGE_PAGE,
	SEARCH_POSTS
} from "./actionTypes";

/**
 * TODO:
 * Add NODE_ENV for development and production
 * (?) combine reducers
 */
const initialState = {
	filters: {},
	loading: false,
	totalPosts: 0,
	totalPages: 0,
	currentQuery: '',
	searchValue: '',
	currentPage: 1,
	posts: []
};

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_FILTERS:
			return { ...state, filters: action.payload };

		case UPDATE_POSTS:
			return { ...state, posts: action.payload };

		case SET_INITIAL_POSTS:
			return { ...state };

		case SET_POST_DATA:
			return {
				...state,
				totalPosts: action.payload.totalPosts,
				totalPages: action.payload.totalPages,
				currentQuery: action.payload.currentQuery,
				currentPage: 1
			};

		case UPDATE_LOADING:
			return { ...state, loading: action.payload };

		case CHANGE_PAGE:
			return { ...state, currentPage: action.payload };

		case SEARCH_POSTS:
			return {
				...state,
				searchValue: action.payload,
				filters: {}
			};

		default:
			return state;
	}
};

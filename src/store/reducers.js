import {
	UPDATE_FILTERS,
	UPDATE_POSTS,
	LOAD_INITIAL_POSTS
} from "./actionTypes";

/**
 * TODO:
 * Add NODE_ENV for development and production
 * (?) combine reducers
 */
const initialState = {
	filters: {},
	baseUrl: 'http://localhost/wp-json/wp/v2/document',
	posts: {
		items: []
	}
};

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_FILTERS:
			return { ...state, filters: action.payload };

		case UPDATE_POSTS:
			return { ...state, posts: action.payload };

		case LOAD_INITIAL_POSTS:
			return { ...state };

		default:
			return state;
	}
};

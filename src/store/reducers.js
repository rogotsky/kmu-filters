import { UPDATE_FILTERS, UPDATE_POSTS } from "./actions";

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
			return { ...state, posts: action.payload};

		default:
			return state;
	}
};

import { UPDATE_FILTERS } from "./actions";

const initialState = {
	selectedFilters: {},
	apiUrl: 'http://localhost/wp-json/wp/v2/document'
};

export const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_FILTERS:
			return { ...state, selectedFilters: action.payload };

		default:
			return state;
	}
};

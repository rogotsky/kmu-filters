export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const updateFilters = (filtersObject) => {
	return {
		type: 'UPDATE_FILTERS',
		payload: filtersObject
	}
};

export const UPDATE_POSTS = 'UPDATE_POSTS';
export const updatePosts = (data) => {
	return {
		type: 'UPDATE_POSTS',
		payload: data
	}
};

export const LOAD_INITIAL_POSTS = 'LOAD_INITIAL_POSTS';
export const loadInitialPosts = () => {
	return {
		type: 'LOAD_INITIAL_POSTS'
	}
};

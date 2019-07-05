export const updateFilters = (filtersObject) => {
	return {
		type: 'UPDATE_FILTERS',
		payload: filtersObject
	}
};

export const updatePosts = (data) => {
	return {
		type: 'UPDATE_POSTS',
		payload: data
	}
};

export const loadInitialPosts = () => {
	return {
		type: 'LOAD_INITIAL_POSTS'
	}
};

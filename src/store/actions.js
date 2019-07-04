export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const updateFilters = (filtersObject) => {
	return {
		type: 'UPDATE_FILTERS',
		payload: filtersObject
	}
};

export const UPDATE_POSTS = 'UPDATE_POSTS';

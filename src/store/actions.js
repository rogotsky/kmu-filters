export const UPDATE_FILTERS = 'UPDATE_FILTERS';

export const changeSelectedFilters = (filtersObject) => {
	return {
		type: 'UPDATE_FILTERS',
		payload: filtersObject
	}
};

export const updateFilters = (data) => {
	return {
		type: 'UPDATE_FILTERS',
		payload: data
	}
};

export const updatePosts = (data) => {
	return {
		type: 'UPDATE_POSTS',
		payload: data
	}
};

export const setInitialPosts = () => {
	return {
		type: 'SET_INITIAL_POSTS'
	}
};

export const setPostData = (data) => {
	return {
		type: 'SET_POST_DATA',
		payload: data
	}
};

export const updateLoading = (data) => {
	return {
		type: 'UPDATE_LOADING',
		payload: data
	}
};

export const changePage = (data) => {
	return {
		type: 'CHANGE_PAGE',
		payload: data
	}
};

export const searchPosts = (data) => {
	return {
		type: 'SEARCH_POSTS',
		payload: data
	}
};

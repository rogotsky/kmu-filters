/**
 *
 * @param props: filter checkbox props
 * @param state: filter checkbox state
 * @returns object: selected filters
 */
export const createFiltersObject = (props, state) => {
	let filters = {...props.filters},
			parent = props.data.parent,
			item = props.data.slug,
			relation = props.data.relation;

	if (!state.isChecked) {
		if (!(parent in filters)) {
			filters[parent] = {};
			filters[parent].items = [item];
			filters[parent].relation = relation;
		} else {
			if (filters[parent].items.indexOf(item) === -1) {
				filters[parent].items.push(item);
			}
		}
	} else {
		if (filters[parent].items.length > 1) {
			filters[parent].items.splice(filters[parent].items.indexOf(item), 1);
		} else {
			delete filters[parent];
		}
	}

	return filters;
};

/**
 *
 * @param base(string): base API url
 * @param filters(object): selected filters
 * @returns {string}
 */
export const createEndpoint = (base, filters) => {
	const newFunction = (filters) => (
			Object.keys(filters).reduce((acc, el, i) => {
				acc += `filter[${el}]=${filters[el].items.join(filters[el].relation === 'AND' ? '%2B' : ',')}
									${i < (Object.keys(filters).length - 1) ? '&' : ''}`;
				return acc;
			}, '')
	);

	return `${base}?${newFunction(filters)}`;
};

/**
 * @param url(string)
 */
export const getPosts = (url) => {
	let posts = {};

	return dispatch => {
		fetch(url)
				.then((response) => {
					posts.totalPages = parseInt(response.headers.get('X-WP-TotalPages'));
					posts.totalPosts = parseInt(response.headers.get('X-WP-Total'));

					return response.json();
				})
				.then((data) => {
					posts.items = data;

					console.log(posts);

					dispatch({
						type: 'UPDATE_POSTS',
						payload: posts
					});
				});
	};
};

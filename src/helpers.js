/**
 *
 * @param props: filter checkbox props
 * @param state: filter checkbox state
 * @returns {object}: selected filters
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
	const query = (filters) => (
			Object.keys(filters).reduce((acc, i,) => {
				acc += `filter[${i}]=${filters[i].items.join(filters[i].relation === 'AND' ? '%2B' : ',')}&`;
				return acc;
			}, '')
	);

	return `${base}${query(filters)}`;
};

/**
 * @param url(string)
 * @param page(number)
 * @returns {object}
 */
export const getPosts = async (url, page) => {
	try {
		const response = await fetch(`${url}${page ? 'page=' + page : ''}`);
		const totalPages = await parseInt(response.headers.get('X-WP-TotalPages'));
		const totalPosts = await parseInt(response.headers.get('X-WP-Total'));
		const items = await response.json();

		return {
			totalPages,
			totalPosts,
			items,
		};
	} catch (e) {
		console.log(e);
	}
};

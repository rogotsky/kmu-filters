/**
 *
 * @param props: filter checkbox props
 * @param check(bool): filter checked state
 * @returns {object}: selected filters
 */
export const createFiltersObject = (props, check) => {
	const filters = {...props.filters},
			{ parent, slug, relation } = props.data;

	if (!check) {
		if (!(filters.hasOwnProperty(parent))) {
			filters[parent] = {};
			filters[parent].items = [slug];
			filters[parent].relation = relation;
		} else {
			if (filters[parent].items.indexOf(slug) === -1) {
				filters[parent].items.push(slug);
			}
		}
	} else {
		if (filters[parent].items.length > 1) {
			filters[parent].items.splice(filters[parent].items.indexOf(slug), 1);
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

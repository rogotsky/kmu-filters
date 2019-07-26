/**
 *
 * @param props: filter checkbox props
 * @param check(bool): filter checked state
 * @returns {object}: selected filters
 */
export const createFiltersObject = (props, check) => {
  const filters = { ...props.filters },
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
      if (i === 'd_rating') {
        acc+= `filter[meta_key]=rmp_rounded_rating&filter[meta_value]=${filters[i].items.join(filters[i].relation === 'AND' ? '%2B' : ',')}&`;
      } else {
        acc += `filter[${i}]=${filters[i].items.join(filters[i].relation === 'AND' ? '%2B' : ',')}&`;
      }

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
      currentQuery: url
    };
  } catch (e) {
    console.log(e);
  }
};

/**
 * @param data {object}
 * @returns FormData {object}
 */
export const prepareFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).reduce((acc, i) => {
    formData.append(i, data[i]);
  }, '');

  return formData;
};

/**
 * @param key {string}
 * @param value {number}
 * @returns {boolean}
 */
export const checkStorage = (key, value) => {
  const storageItem = localStorage.getItem(key);

  if (!storageItem) {
    return false;
  } else if (JSON.parse(storageItem).indexOf(value) === -1) {
    return false;
  }

  return true;
};

/**
 * @param key {string}
 * @param value {number}
 */
export const setStorage = (key, value) => {
  const field = JSON.parse(localStorage.getItem(key));

  if (localStorage.getItem(key)) {
    field.push(value);
    localStorage.setItem(key, JSON.stringify(field));
  } else {
    localStorage.setItem(key, JSON.stringify([value]));
  }
};

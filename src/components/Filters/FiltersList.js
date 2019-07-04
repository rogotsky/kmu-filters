import React from 'react';
import Filter from './Filter';
import FiltersData from './FiltersData';
import shortid from 'shortid';

const FiltersList = () => {
	const createFilters = (data) => {
		return data.map(filterData => {
			return <Filter data={filterData} key={shortid.generate()}/>
		});
	};

	return (
			<div className="service-filters">
				{createFilters(FiltersData)}
			</div>
	)
};

export default FiltersList;

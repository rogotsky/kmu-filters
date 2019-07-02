import React from 'react';
import FilterRow from './FilterRow';
import shortid from 'shortid';

const Filter = (props) => {
	const {data} = props;

	return (
			<div className="service-filter">
				<p className="service-filter__title">{data.name}</p>
				<ul className="service-filter__items">
					{data.items.map(filterRowData => {
						filterRowData.parent = data.slug;
						filterRowData.relation = data.relation;
						return <FilterRow data={filterRowData} key={shortid.generate()}/>
					})}
				</ul>
			</div>
	)
};

export default Filter;

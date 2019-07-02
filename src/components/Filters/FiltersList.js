import React, {Component} from 'react';
import Filter from './Filter';
import FiltersData from './FiltersData';
import shortid from 'shortid';

class FiltersList extends Component {
	constructor(props) {
		super(props);
	}

	createFilters(data) {
		return data.map(filterData => {
			return <Filter data={filterData} key={shortid.generate()}/>
		});
	}

	render() {
		return (
				<div className="service-filters">
					{this.createFilters(FiltersData)}
				</div>
		)
	}
}

export default FiltersList;

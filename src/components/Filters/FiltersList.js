import React, { Component } from 'react';
import Filter from './Filter';
import FiltersData from './FiltersData';
import shortid from 'shortid';

class FiltersList extends Component {
	constructor(props) {
		super(props);
		this.toggleFilters = this.toggleFilters.bind(this);

		this.state = {
			filtersOpened: false
		}
	}

	createFilters(data) {
		return data.map(filterData => {
			return <Filter data={filterData} key={shortid.generate()}/>
		});
	}

	toggleFilters() {
		this.setState({
			filtersOpened: !this.state.filtersOpened
		});
	}

	render() {
		return (
				<div className="service-filters">
					<button
							className={`service-filters__toggle${this.state.filtersOpened ? ' service-filters__toggle--opened' : ''}`}
							onClick={this.toggleFilters}
					>
						Filter
					</button>
					<div
							className={`service-filters__inner${this.state.filtersOpened ? ' service-filters__inner--opened' : ''}`}
					>
						{this.createFilters(FiltersData)}
					</div>
				</div>
		)
	}
}

export default FiltersList;

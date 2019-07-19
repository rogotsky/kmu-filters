import React, { Component } from 'react';
import Filter from './Filter';
import FiltersData from './FiltersData';

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
      return <Filter data={filterData} key={filterData.name}/>
    });
  }

  toggleFilters() {
    this.setState({
      filtersOpened: !this.state.filtersOpened
    });
  }

  render() {
    const buttonToggledClass = this.state.filtersOpened ? ' service-filters__toggle--opened' : '',
      filtersToggledClass = this.state.filtersOpened ? ' service-filters__inner--opened' : '';

    return (
      <div className="service-filters">
        <button
          className={`service-filters__toggle${buttonToggledClass}`}
          onClick={this.toggleFilters}
        >
          Filter
        </button>
        <div
          className={`service-filters__inner${filtersToggledClass}`}
        >
          {this.createFilters(FiltersData)}
        </div>
      </div>
    )
  }
}

export default FiltersList;

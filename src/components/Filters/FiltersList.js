import React, { Component } from 'react';
import Filter from './Filter';
import { FILTERS_DATA_URL } from "../../constants";

class FiltersList extends Component {
  constructor(props) {
    super(props);
    this.toggleFilters = this.toggleFilters.bind(this);

    this.state = {
      filtersOpened: false,
      filtersData: []
    }
  }

  componentDidMount() {
    this.setFiltersData(FILTERS_DATA_URL);
  }

  async setFiltersData(url) {
    try {
      const response = await fetch(url);
      const items = await response.json();

      this.setState({
        filtersData: items
      })
    } catch (e) {
      console.log(e);
    }
  };

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
      filtersToggledClass = this.state.filtersOpened ? ' service-filters__inner--opened' : '',
      filtersData = this.state.filtersData;

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
          {!!filtersData.length && this.createFilters(filtersData)}
        </div>
      </div>
    )
  }
}

export default FiltersList;

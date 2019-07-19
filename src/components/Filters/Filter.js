import React from 'react';
import FilterRow from './FilterRow';
import PropTypes from 'prop-types';

const Filter = ({ data }) => {
  const filterRows = data.items.map(filterRowData => {
    filterRowData.parent = data.slug;
    filterRowData.relation = data.relation;
    return <FilterRow data={filterRowData} key={filterRowData.name}/>
  });

  return (
    <div className="service-filter">
      <p className="service-filter__title">{data.name}</p>
      <ul className="service-filter__items">
        {filterRows}
      </ul>
    </div>
  )
};

Filter.propTypes = {
  data: PropTypes.object
};

export default Filter;

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateFilters } from "../../store/actions";
import { createFiltersObject } from "../../helpers";
import PropTypes from 'prop-types';

class FilterRow extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }

  isChecked() {
    const filters = this.props.filters;
    const { parent, slug } = this.props.data;

    return (filters.hasOwnProperty(parent)) && (filters[parent].items.indexOf(slug) !== -1);
  }

  handleChange() {
    this.props.updateFilters(createFiltersObject(this.props, this.isChecked()));
  }

  render() {
    return (
      <li className="service-filter__item">
        <label>
          <input
            type="checkbox"
            checked={this.isChecked()}
            onChange={this.handleChange}
          />
          <span className="filter-checkbox"/>
          <span className="filter-name">{this.props.data.name}</span>
        </label>
      </li>
    )
  }
}

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = {
  updateFilters
};

FilterRow.propTypes = {
  filters: PropTypes.object,
  updateFilters: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRow);

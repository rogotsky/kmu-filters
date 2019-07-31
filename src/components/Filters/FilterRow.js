import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateFilters } from "../../store/actions";
import { createFiltersObject } from "../../helpers";
import PropTypes from 'prop-types';
import Stars from './Stars';

class FilterRow extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    if (this.isChecked()) {
      e.target.checked = false;
      this.handleChange();
    }
  }

  render() {
    const isRating = this.props.data.parent === 'd_rating';

    return (
      <li className="service-filter__item">
        <label>
          { isRating ?
            <input
              type="radio"
              name={this.props.data.parent}
              checked={this.isChecked()}
              onChange={this.handleChange}
              onClick={this.handleClick}
            /> :
            <input
              type="checkbox"
              checked={this.isChecked()}
              onChange={this.handleChange}
            />
          }
          <span className="filter-checkbox"/>
          <span className="filter-name">
            { isRating ? <Stars count={this.props.data.slug} /> : this.props.data.name }
          </span>
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
  updateFilters: PropTypes.func,
  data: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRow);

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
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  isChecked() {
    const filters = this.props.filters;
    const { parent, slug } = this.props.data;

    return (filters.hasOwnProperty(parent)) && (filters[parent].items.indexOf(slug) !== -1);
  }

  handleChange() {
    this.props.updateFilters(createFiltersObject(this.props, this.isChecked()));
  }

  handleRadioClick(e) {
    if (this.props.loading) {
      e.preventDefault();
      return false;
    }

    if (this.isChecked()) {
      e.target.checked = false;
      this.handleChange();
    }
  }

  handleCheckboxClick(e) {
    if (this.props.loading) {
      e.preventDefault();
      return false;
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
              onClick={this.handleRadioClick}
            /> :
            <input
              type="checkbox"
              checked={this.isChecked()}
              onChange={this.handleChange}
              onClick={this.handleCheckboxClick}
            />
          }
          <span className="filter-checkbox"/>
          { isRating ?
            <span className="filter-name">
              <Stars count={this.props.data.slug} />
            </span> :
            <span className="filter-name" dangerouslySetInnerHTML={{__html: this.props.data.name}} />
          }
        </label>
      </li>
    )
  }
}

const mapStateToProps = ({ filters, loading }) => ({ filters, loading });

const mapDispatchToProps = {
  updateFilters
};

FilterRow.propTypes = {
  filters: PropTypes.object,
  updateFilters: PropTypes.func,
  data: PropTypes.object,
  loading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRow);

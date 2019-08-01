import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPosts } from "../store/actions";
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);

    this.state = {
      searchValue: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!!this.state.searchValue && !this.props.loading) {
      this.props.searchPosts(this.state.searchValue);
    } else {
      return false;
    }
  };

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    });

    if (e.target.value.length === 0 && !this.props.loading) {
      this.props.searchPosts('');
    }
  }

  clearSearch() {
    this.props.searchPosts('');

    this.setState({
      searchValue: ''
    });
  }

  render() {
    const clearSearchClass = !this.state.searchValue ? ' service-search__clear--hidden' : '';

    return (
      <div className="service-search">
        <form className="service-search__form" onSubmit={this.handleSubmit}>
          <button>Suche</button>
          <input
            id={'service-search-input'}
            type="text"
            placeholder="Resultate innerhalb dieser Suche"
            autoComplete="off"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
          <span
            className={`service-search__clear${clearSearchClass}`}
            onClick={this.clearSearch}
          />
        </form>
        <p className="service-search__results">{this.props.totalPosts} KMU Vorlagen stehen Ihnen zur Verfügung.</p>
      </div>
    );
  }
}

const mapStateToProps = ({ totalPosts, loading }) => ({ totalPosts, loading });

const mapDispatchToProps = {
  searchPosts
};

Search.propTypes = {
  totalPosts: PropTypes.number,
  searchPosts: PropTypes.func,
  loading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

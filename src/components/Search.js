import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchPosts } from "../store/actions";

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

		if (!!this.state.searchValue) {
			this.props.searchPosts(this.state.searchValue);
		}
	};

	handleChange(e) {
		this.setState({
			searchValue: e.target.value
		});

		if (e.target.value.length === 0) {
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
								className={`service-search__clear${!this.state.searchValue ? ' service-search__clear--hidden' : ''}`}
								onClick={this.clearSearch}
						/>
					</form>
					<p className="service-search__results">{this.props.totalPosts} KMU Vorlagen stehen Ihnen zur Verfügung.</p>
				</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		totalPosts: state.totalPosts
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchPosts: bindActionCreators(searchPosts, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { updateFilters } from "../../store/actions";
import { createFiltersObject } from "../../helpers";

class FilterRow extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			isChecked: false
		}
	}

	handleChange() {
		this.props.updateFilters(createFiltersObject(this.props, this.state));

		this.setState({
			isChecked: !this.state.isChecked
		});
	}

	render () {
		return (
				<li className="service-filter__item">
					<label>
						<input
								type="checkbox"
								onChange={this.handleChange}
						/>
						<span className="filter-checkbox"/>
						<span className="filter-name">{ this.props.data.name}</span>
					</label>
				</li>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateFilters: bindActionCreators(updateFilters, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRow);

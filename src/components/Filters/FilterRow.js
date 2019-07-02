import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { changeSelectedFilters } from "../../store/actions";

class FilterRow extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			isChecked: false
		}
	}

	handleChange() {
		let filters = {...this.props.selectedFilters},
				parent = this.props.data.parent,
				item = this.props.data.slug,
				relation = this.props.data.relation;

		if (!this.state.isChecked) {
			if (!(parent in filters)) {
				filters[parent] = {};
				filters[parent].items = [item];
				filters[parent].relation = relation;
			} else {
				if (filters[parent].items.indexOf(item) === -1) {
					filters[parent].items.push(item);
				}
			}
		} else {
			if (filters[parent].items.length > 1) {
				filters[parent].items.splice(filters[parent].items.indexOf(item), 1);
			} else {
				delete filters[parent];
			}
		}

		this.props.changeSelectedFilters(filters);

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
		selectedFilters: state.selectedFilters
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeSelectedFilters: bindActionCreators(changeSelectedFilters, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRow);

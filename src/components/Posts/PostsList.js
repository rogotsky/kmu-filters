import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class PostsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			isLoading: false,
			pages: 1
		};
	}

	componentWillMount() {
		this.getPosts();
	}

	componentDidUpdate(prevProps) {
		if (this.props !== prevProps) {
			this.getPosts();
		}
	}

	getPosts(url = this.finalEndpoint()) {
		this.setState({
			isLoading: true
		});

		fetch(url)
				.then((response) => response.json())
				.then((data) => {
					this.setState({
						posts: data,
						isLoading: false
					})
				});
	}

	finalEndpoint(base = this.props.apiUrl, filters = this.props.selectedFilters) {
		let filtersUrl = '',
				filterCounter = 1,
				filtersCount = Object.keys(filters).length;

		if (filtersCount === 0) return base;

		for (let filter in filters) {
			filtersUrl+= `filter[${filter}]=${filters[filter].items.join((filters[filter].relation === 'AND' ? '%2B' : ','))}`;

			if (filterCounter < filtersCount) {
				filtersUrl+= '&';
			}

			filterCounter++;
		}

		return `${base}?${filtersUrl}`;
	}

	createPosts(data) {
		return data.map(postData => {
			return <Post data={postData} key={postData.id} />;
		});
	}

	render() {
		console.log(this.finalEndpoint());

		return (
				<div className="service-items">
					<div className={this.state.isLoading ? 'service-loader service-loader--loading' : 'service-loader'} />
					{!this.state.posts.length && !this.state.isLoading && <div>Nichts gefunden</div>}
					{!!this.state.posts.length && this.createPosts(this.state.posts)}
				</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		selectedFilters: state.selectedFilters,
		apiUrl: state.apiUrl,
		posts: state.posts
	}
};

export default connect(mapStateToProps)(PostsList);


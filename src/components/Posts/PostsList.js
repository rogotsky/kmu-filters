import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { createEndpoint } from "../../helpers";

class PostsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			isLoading: false,
			pages: 0,
			totalPosts: 0
		};
	}

	componentWillMount() {
		this.getPosts(createEndpoint(
				this.props.baseUrl,
				this.props.filters
		));
	}

	componentDidUpdate(prevProps) {
		if (this.props !== prevProps) {
			this.getPosts(createEndpoint(
					this.props.baseUrl,
					this.props.filters
			));
		}
	}

	getPosts(url) {
		let pages, totalPosts;

		this.setState({
			isLoading: true
		});

		fetch(url)
				.then((response) => {
					pages = parseInt(response.headers.get('X-WP-TotalPages'));
					totalPosts = parseInt(response.headers.get('X-WP-Total'));

					return response.json();
				})
				.then((data) => {
					this.setState({
						posts: data,
						isLoading: false,
						pages: pages,
						totalPosts: totalPosts
					})
				});
	}

	createPosts(data) {
		return data.map(postData => {
			return <Post data={postData} key={postData.id} />;
		});
	}

	render() {
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
		filters: state.filters,
		baseUrl: state.baseUrl,
		posts: state.posts
	}
};

export default connect(mapStateToProps)(PostsList);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { loadInitialPosts } from '../../store/actions';
import { bindActionCreators } from 'redux';

class PostsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		};
	}

	componentDidMount() {
		this.props.loadInitialPosts();
	}

	createPosts(data) {
		return data.map(postData => {
			return <Post data={postData} key={postData.id} />;
		});
	}

	render() {
		console.log(this.props.posts.items);

		return (
				<div className="service-items">
					{/*<div className={this.state.isLoading ? 'service-loader service-loader--loading' : 'service-loader'} />*/}
					{/*{!this.state.posts.length && !this.state.isLoading && <div>Nichts gefunden</div>}*/}
					{!!this.props.posts.items.length && this.createPosts(this.props.posts.items)}
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

const mapDispatchToProps = (dispatch) => {
	return {
		loadInitialPosts: bindActionCreators(loadInitialPosts, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);


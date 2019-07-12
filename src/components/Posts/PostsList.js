import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { setInitialPosts, changePage } from '../../store/actions';
import { bindActionCreators } from 'redux';
import Pagination from 'react-pagination-library';

class PostsList extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.setInitialPosts();
	}

	createPosts(data) {
		return data.map(postData => {
			return <Post data={postData} key={postData.id} />;
		});
	}

	render() {
		const {
			posts,
			loading,
			currentPage,
			totalPages,
			changePage
		} = this.props;

		return (
				<div className="service-items">
					<div className={!!loading ? 'service-loader service-loader--loading' : 'service-loader'} />
					{(!posts.length && !loading) && <div>Nichts gefunden</div>}
					{!!posts.length && this.createPosts(posts)}
					{totalPages > 1 &&
					<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							changeCurrentPage={changePage}
							theme='square'
					/>}
				</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		posts: state.posts,
		currentPage: state.currentPage,
		totalPages: state.totalPages
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setInitialPosts: bindActionCreators(setInitialPosts, dispatch),
		changePage: bindActionCreators(changePage, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);


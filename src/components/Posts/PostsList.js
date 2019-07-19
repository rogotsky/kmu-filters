import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { setInitialPosts, changePage } from '../../store/actions';
import Pagination from 'react-pagination-library';
import PropTypes from 'prop-types';

class PostsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setInitialPosts();
  }

  createPosts(data) {
    return data.map(postData => {
      return <Post data={postData} key={postData.id}/>;
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

    const postList = !!posts.length && this.createPosts(posts),
      notFound = (!posts.length && !loading) && <div>Nichts gefunden</div>,
      preloader = <div className={!!loading ? 'service-loader service-loader--loading' : 'service-loader'}/>;

    return (
      <div className="service-items">
        {preloader}
        {notFound}
        {postList}
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

const mapStateToProps = ({ loading, posts, currentPage, totalPages }) => ({
  loading,
  posts,
  currentPage,
  totalPages
});

const mapDispatchToProps = {
  setInitialPosts,
  changePage
};

PostsList.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.array,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  setInitialPosts: PropTypes.func,
  changePage: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);


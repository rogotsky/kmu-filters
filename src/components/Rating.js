import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';
import PropTypes from 'prop-types';
import {
  SESSION_START,
  RATING_AJAX_URL
} from "../constants";

class Rating extends Component {
  constructor(props) {
    super(props);

    this.changeRating = this.changeRating.bind(this);

    this.state = {
      rating: this.props.rating,
      userVoted: false
    };
  }

  changeRating(newRating) {
    const duration = Math.floor(Date.now() / 1000) - SESSION_START;
    const data = {
      action: 'process_rating',
      star_rating: newRating,
      postID: this.props.postId,
      duration: duration
    };

    fetch(RATING_AJAX_URL, {
      method: 'POST',
      body: this.prepareRatingData(data)
    });

    this.setState({
      rating: newRating,
      userVoted: true
    });
  }

  prepareRatingData(data) {
    const formData = new FormData();

    Object.keys(data).reduce((acc, i) => {
      formData.append(i, data[i]);
    }, '');

    return formData;
  }

  render() {
    const { rating, userVoted } = this.state,
      disabledClass = userVoted ? ' service-item__rating--disabled' : '';

    return (
      <div className={`service-item__rating`}>
        <Ratings
          rating={rating}
          widgetRatedColors="#4f5b71"
          widgetHoverColors="#4f5b71"
          changeRating={this.changeRating}
          widgetDimensions="20px"
          widgetSpacings="1px"
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
        {(rating > 0) && <span className="service-item__rating-count">{rating}</span>}
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  postId: PropTypes.number
};

export default Rating;

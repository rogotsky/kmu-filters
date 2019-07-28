import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({ count }) => {
  return (
    [...Array(count)].map((e, i) => <span className="dashicons dashicons-star-filled" key={i}/>)
  )
};

Stars.propTypes = {
  count: PropTypes.number
};

export default Stars;

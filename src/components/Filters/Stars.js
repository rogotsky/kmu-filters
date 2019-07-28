import React from 'react';

const Stars = ({ count }) => {
  return (
    [...Array(count)].map((e, i) => <span className="dashicons dashicons-star-filled" key={i}/>)
  )
};

export default Stars;
